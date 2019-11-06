import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import _ from 'lodash';

class Login extends Component {
    state = {
        user: 'rafael@gmail.com',
        password: '123456',
    }

    async componentDidMount() {
        _.delay(() => this.props.navigation.navigate('SubscriberMQTT'), 2000);
    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput style={styles.input} placeholder='Login' value={this.state.user}/>
                <TextInput style={styles.input} placeholder='Senha' value={this.state.password}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        margin: 10,
        borderRadius: 5,
    },
    view: {
        justifyContent: 'center',
    }
});

Login.navigationOptions = {
    title: 'Login',
    headerLeft: null,
}

export default Login

    