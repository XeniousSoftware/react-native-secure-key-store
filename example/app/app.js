/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNSecureKeyStore from "react-native-secure-key-store";

export default class example extends Component {
  render() {

    RNSecureKeyStore.set("key1", "value1")
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

     RNSecureKeyStore.set("key2", "value2")
       .then((res) => {
         console.log(res);
       }, (err) => {
         console.log(err);
       });

     RNSecureKeyStore.get("key1")
       .then((res) => {
         console.log(res);
       }, (err) => {
         console.log(err);
       });

     RNSecureKeyStore.get("key2")
       .then((res) => {
         console.log(res);
       }, (err) => {
         console.log(err);
       });

     RNSecureKeyStore.remove("key1")
       .then((res) => {
         console.log(res);
       }, (err) => {
         console.log(err);
       });

     RNSecureKeyStore.remove("key2")
       .then((res) => {
         console.log(res);
       }, (err) => {
         console.log(err);
       });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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

AppRegistry.registerComponent('example', () => example);
