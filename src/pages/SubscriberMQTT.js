import React, {Component} from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import _ from 'lodash';

class SubscriberMQTT extends Component {
    state = {
        devices: [],
        disabled: true,
        idServer: '',
        routeServer: '',
    }

    disableButton = () => {
        return !(this.state.idServer);
    }

    onClickButton = async () => {
        let config = {
            idServer: this.state.idServer,
            routeServer: this.state.routeServer,
        }
        await AsyncStorage.setItem('config',JSON.stringify(config));
        _.delay(() => this.props.navigation.navigate('Device'), 1000);
    }

    render() {
        return (
            <View  style={styles.container}> 
                <Text style={styles.textTitle}>DADOS CONEXAO</Text>
                <Text>Número de série</Text>
                <TextInput style={styles.input} value={this.state.idServer} onChangeText={(idServer) => this.setState({ idServer })}  placeholder="000000" />
                <View style={styles.viewButton} >
                   <Button disabled={this.disableButton()}  onPress={this.onClickButton} buttonStyle={styles.button} title=" Próximo" />
                </View>
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
        width: 250,
        paddingLeft: 7,
    },
    textTitle: {
        fontSize: 17,
    },
    viewButton: {
        marginTop: 5,
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        backgroundColor: '#80DEEA',
    }
});

SubscriberMQTT.navigationOptions = {
    title: 'Sose Conexão',
    headerLeft: null,
}

export default SubscriberMQTT

    