import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from '@emotion/native'
import { FormWrapper, ViewWrapper } from './common/Wrappers'
import { Label, TextField } from './common/FormElements'
import { GoBtn } from './common/Buttons'

class CreateDeck extends Component {
  state = {
    value: ''
  }

  handleChange = text => {
    this.setState({value: text});
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ViewWrapper layout="compact">
          <FormWrapper>
            <Label>Deck name?</Label>
            <TextField
              placeholder="Enter a name"
              placeholderTextColor="silver"
              value={this.state.value}
              onChangeText={this.handleChange}
              underlineColorAndroid="transparent"
            />
          </FormWrapper>
          <GoBtn>Create Deck</GoBtn>
        </ViewWrapper>
      </KeyboardAvoidingView>
    );
  }
}

export default CreateDeck;
