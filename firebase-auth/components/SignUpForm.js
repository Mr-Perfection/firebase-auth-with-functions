import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpForm extends Component {
  // in ES7, you don't need 'this' in front of state and declare it inside the constructor.
  state = { phone: '' };

  handleSubmit = () => {
    // If you are using Fat Arrow function, you do not need to bind(this)

  }

  render() {
    return (
      <View>
        <View style={{ marginButton: 10 }}>
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
