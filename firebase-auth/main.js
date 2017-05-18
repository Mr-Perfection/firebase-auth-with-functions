import Expo from 'expo';
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import { FIREBASE_CONFIG } from './keys.js';

class App extends React.Component {

  componentDidMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignInForm />
        <SignUpForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
