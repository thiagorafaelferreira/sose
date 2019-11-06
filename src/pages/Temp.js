import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

const ButtonDevice = ({ changeColor, color, index }) => (
    <View style={styles.viewButton}>
        <Button onPress={() => changeColor(index)} color={color}  title={`Device ${index}`} />
    </View>
)

class Login extends Component {
    constructor(props) {
        super(props);
        let devices = [];
        for(let i = 0; i < 4; i++) {
            devices.push({ color: 'black' });
        }
        this.state = {
            devices: devices,
        }
    }
    
    changeColor = (index) => {
        const tempState = { ...this.state };
        tempState.devices[index].color = tempState.devices[index].color === 'black' ? 'greenyellow' : 'black'
        this.setState({ devices: tempState.devices });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Dispositivos Gerenciados</Text>
                {this.state.devices.map((device, index) => 
                    <ButtonDevice key={`button_${index}}`} changeColor={this.changeColor} color={device.color} index={index}/>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    }
});

Login.navigationOptions = {
    title: 'Gerenciador',
    headerLeft: null,
}

export default Login

    