import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

class ButtonReload extends Component {

    onPressButton = async () => {
        await AsyncStorage.clear();
    }

    render() {
        return(
            <Button buttonStyle={styles.button} onPress={this.onPressButton} icon={
                <Icon name='eraser' size={27} color='white' />
            } />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00BCD4',
        marginRight: 10,
    }
});

export default ButtonReload;

