import React, { Component } from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, Text } from 'react-native';
import styled from '@emotion/native'
import { FormWrapper, ViewWrapper } from './common/Wrappers'
import { Label, TextField } from './common/FormElements'
import { GoBtn } from './common/Buttons'

class CreateDeck extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleQuestionChange = text => {
    this.setState({question: text});
  }

  handleAnswerChange = text => {
    this.setState({answer: text});
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ViewWrapper layout="compact">
          <FormWrapper>
            <Label>What's the question...?</Label>
            <TextField
              placeholder="Enter a question"
              placeholderTextColor="silver"
              value={this.state.question}
              onChangeText={this.handleQuestionChange}
              underlineColorAndroid="transparent"
          />
          </FormWrapper>
          <FormWrapper>
            <Label>...and the answer?</Label>
            <TextField
              placeholder="Enter an answer"
              placeholderTextColor="silver"
              value={this.state.answer}
              onChangeText={this.handleAnswerChange}
              underlineColorAndroid="transparent"
            />
          </FormWrapper>
          <GoBtn>Create Card</GoBtn>
        </ViewWrapper>
      </KeyboardAvoidingView>
    );
  }
}

export default CreateDeck;
