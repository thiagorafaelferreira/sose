/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

export default class Presentation extends Component {

  async componentDidMount() {
    const config = await AsyncStorage.getItem('config');
    _.delay(() => this.props.navigation.navigate(config ? 'Switches' :'SubscriberMQTT'), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0087A7" barStyle="light-content" />
        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', height: 70, width: 130}}>
            <View style={styles.alignCenterItem}>
              <Icon size={35} name='lightbulb-o' />
            </View>
            <View style={styles.alignCenterItem}>
              <Icon size={35} name='mobile' />
            </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', height: 70, width: 200}}>
          <View style={styles.alignCenterItem}>
            <Icon size={35} name='tablet' />
          </View>
          <View style={styles.alignCenterItemPrincipal}>
            <Icon size={35} name='wifi' />
          </View>
          <View style={styles.alignCenterItem}>
            <Icon size={35} name='tv' />
          </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', height: 70, width: 130}}>
            <View style={styles.alignCenterItem}>
              <Icon size={35} name='video-camera' />
            </View>
            <View style={styles.alignCenterItem}>
              <Icon size={35} name='plug' />
              </View>
        </View>
        <Text style={styles.welcome}> Sose Connect</Text>
        <Text style={styles.welcome}>Gerencie Seus Dispositivos!</Text>
        <Text style={styles.instructions}>Bem Vindo a Sose Tech Automação</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundItem: {
    backgroundColor: 'greenyellow',
  },
  alignAround: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  alignCenterItem: {
    width: 50,
    borderColor: 'black',
    borderWidth: 2,
    padding: 3,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4E157',
  },
  alignCenterItemPrincipal: {
    width: 50,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#9CCC65',
    padding: 3,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80DEEA',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Presentation.navigationOptions = {
  header: null,
}
