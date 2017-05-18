import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { FIREBASE_ROOT_URL } from '../keys.js';

class SignInForm extends Component {
  // in ES7, you don't need 'this' in front of state and declare it inside the constructor.
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    const { phone, code } = this.state;

    try {
      const { data } = await axios.post(`${FIREBASE_ROOT_URL}/verifyOneTimePassword`, 
        { phone, code });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter the code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignInForm;
