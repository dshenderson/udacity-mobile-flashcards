import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from '@emotion/native'
import { AppWrapper, FormWrapper, ViewWrapper } from './common/Wrappers'
import { Label, TextField } from './common/FormElements'
import { PrimaryBtn } from './common/Buttons'

class CreateCard extends Component {
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

  createCard = () => {
    this.props.navigation.navigate('Deck');
  }

  render() {
    return (
      <AppWrapper>
        <ViewWrapper layout="compact">
          <KeyboardAvoidingView behavior="padding">
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
            <PrimaryBtn onPress={this.createCard}>Create Card</PrimaryBtn>
          </KeyboardAvoidingView>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

export default CreateCard;
