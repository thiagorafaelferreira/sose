import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import ButtonConfig from '../components/buttonConfig';
import MQTT from 'sp-react-native-mqtt';
import Spinner from 'react-native-loading-spinner-overlay';

const ButtonDevice = ({ ativaDispositivo, color, index }) => (
    <View style={styles.viewButton}>
        <Button onPress={() => ativaDispositivo(index)} buttonStyle={{ backgroundColor: color }}  title={`Device ${index}`} />
    </View>
)

class Switches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: null,
            devices: [], 
            clientMQTT: null,
            spinner: true,
        };
    }

    componentDidMount() {
       this.loadConfig();
       this.loadPage()   
    }

    loadPage = async () => {
        setTimeout(() => { 
            if(this.state.clientMQTT) {
                this.state.clientMQTT.then((client) => client.connect());
                this.loadPage();
            }
        }, 3000);
    }
    

    loadConfig = async () => {
        const component = this;
        const config = JSON.parse(await AsyncStorage.getItem('config'));
        let devices = [];
        
        for(let i = 0; i < config.numberDevices; i++) {
            devices.push({ color: '#80DEEA' });
        };
        
        const clientMQTT =  MQTT.createClient({
            uri: 'mqtt://broker.mqttdashboard.com:1883',
            clientId: config.idServer,
        });

        component.setState({ clientMQTT });
        
        clientMQTT.then(function(client) {
            
            client.on('message', function(msg) {
                console.log('mqtt.event.message', msg);
                const rele = Number(msg.topic.replace("StatusRele", "")) - 1;
                console.log("Numero do dispositivo na lista: " + rele);
                console.log("Nao modificado : ");
                console.log(devices);
                if(devices !== undefined && devices.length) {
                    devices[rele].color = (msg !== undefined && msg.data === "1" ? 'greenyellow' : '#80DEEA');
                }
                console.log("Modificado ");
                console.log(devices);
                component.setState({ devices });
            });
            
            client.on('connect', function() {
                    console.log(`Lendo reles`);
                    client.subscribe(`StatusRele1`, 1);
                    client.subscribe(`StatusRele2`, 1);
                    client.subscribe(`StatusRele3`, 1);
                    client.subscribe(`StatusRele4`, 1);
                    client.subscribe(`StatusRele5`, 1);
                    client.subscribe(`StatusRele6`, 1);
                    client.subscribe(`StatusRele7`, 1);
                    client.subscribe(`StatusRele8`, 1);
                    client.subscribe(`StatusRele9`, 1);
                    client.subscribe(`StatusRele10`, 1);
                    client.subscribe(`StatusRele11`, 1);
                    client.subscribe(`StatusRele12`, 1);
                    client.subscribe(`StatusRele13`, 1);
                    client.subscribe(`StatusRele14`, 1);
                    client.subscribe(`StatusRele15`, 1);
                    client.subscribe(`StatusRele16`, 1);
            });
            client.connect();
        }).catch(function(err){
            console.log(err);
        });
        setTimeout(() => component.setState({ config, devices, spinner: false }), 1000);
    }
    
    ativaDispositivo = (index) => {
        const component = this;
        const temp = {...this.state};
        const ativaDispositivo = temp.devices[index-1].color === '#80DEEA' ? "1" : "0";
        component.setState({ spinner: true });
        
        const clientMQTTPublish =  MQTT.createClient({
            uri: 'mqtt://broker.mqttdashboard.com:1883',
            clientId: temp.config.idServer,
        });

        clientMQTTPublish.then(function(client) {
            
            client.on('connect', function() {
                console.log(`call publish config ComandoRele${index}`);
                console.log("dispositivo recebera o valor: " + ativaDispositivo);
                client.publish(`ComandoRele${index}`, ativaDispositivo, 1, true);
            });
            
            client.connect();
        })

        setTimeout(() => { 
            component.state.clientMQTT.then((client) => client.connect());
            setTimeout(() => {
                component.setState({ spinner: false });
            }, 1000);
        }, 14000);

    }

    render() {
        return (
            <ScrollView>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                    />
                <Text style={styles.title}>Dispositivos Gerenciados</Text>
                {this.state.devices.map((device, index) => 
                    <ButtonDevice key={`button_${index+1}}`} ativaDispositivo={this.ativaDispositivo} color={device.color} index={index+1}/>
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        margin: 10,
        borderRadius: 5,
    },
    viewButton: {
        marginTop: 5,
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    }
});

Switches.navigationOptions = {
    title: 'Gerenciador',
    headerLeft: null,
    headerRight: (<ButtonConfig />),
}

export default Switches

    