import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { FIREBASE_ROOT_URL } from '../keys.js';

class SignUpForm extends Component {
  // in ES7, you don't need 'this' in front of state and declare it inside the constructor.
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${FIREBASE_ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${FIREBASE_ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
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
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
