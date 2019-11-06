import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import _ from 'lodash';
import globalStyles from '../css/globalStyles';

class Configuration extends Component {
    state = {
        numberDevices: '4',
        color: 'white',
        buttonColor: 'black',
    }

    componentDidMount() {
        this.loadConfiguration();
    }

    loadConfiguration = async () => {
        const storage = await AsyncStorage.getItem('config');
        const storageParsed = JSON.parse(storage);

        if(storageParsed.devices !== null && storageParsed.devices !== undefined) {
            for(let i = 0; i < config.numberDevices; i++) {
                storageParsed.devicesTitle.push({ title: `Device ${i+1}` });
            };
            await AsyncStorage.setItem('config', JSON.stringify(storageParsed));
        }

    }

    changeColor = () => {
        this.setState({color: this.state.color === 'white' ? 'black' : 'white'});
    }

    render() {
        return (
            <View  style={globalStyles.container}>
                <Text style={globalStyles.textTitle}>QUANTIDADE DE DISPOSITIVOS</Text>
                <View style={styles.viewButton}>
                   <Button onPress={() => this.onClickButton(4)} buttonStyle={styles.button} title="4 Dispositivos" />
                </View>
                <View style={styles.viewButton}>
                   <Button onPress={() => this.onClickButton(8)} buttonStyle={styles.button} title="8 Dispositivos" />
                </View>
                <View style={styles.viewButton}>
                   <Button onPress={() => this.onClickButton(12)} buttonStyle={styles.button} title="12 Dispositivos" />
                </View>
                <View style={styles.viewButton}>
                   <Button onPress={() => this.onClickButton(16)} buttonStyle={styles.button} title="16 Dispositivos" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    picker: {
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: 'black',
        height: 50,
        width: 180,
        color: 'white',
    },
    pickerItem: {
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'grey',
    },
    viewButton: {
        marginTop: 5,
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10, 
    },
    button: {
        backgroundColor: '#80DEEA',
    },
});

Configuration.navigationOptions = {
    title: 'Dispositivos',
    headerLeft: null,
}

export default Configuration;

    