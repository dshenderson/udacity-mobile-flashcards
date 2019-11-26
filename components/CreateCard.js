import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import { handleAddCard } from '../actions'
import { AppWrapper, FormWrapper, ViewWrapper } from './common/Wrappers'
import { TextField } from './common/FormElements'
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
    const {question, answer} = this.state;
    const {dispatch, navigation} = this.props;
    const {title: deck} = navigation.getParam('deck');
    const card = {question, answer};

    dispatch(handleAddCard(deck, card));

    this.setState({question: '', answer: ''});
  }

  render() {
    return (
      <AppWrapper>
        <ViewWrapper layout="compact">
          <KeyboardAvoidingView behavior="padding">
            <FormWrapper>
              <TextField
                placeholder="Enter a question"
                placeholderTextColor="silver"
                value={this.state.question}
                onChangeText={this.handleQuestionChange}
                underlineColorAndroid="transparent"
            />
            </FormWrapper>
            <FormWrapper>
              <TextField
                placeholder="Enter an answer"
                placeholderTextColor="silver"
                value={this.state.answer}
                onChangeText={this.handleAnswerChange}
                underlineColorAndroid="transparent"
              />
            </FormWrapper>
            <PrimaryBtn onPress={this.createCard} disabled={!this.state.question || !this.state.answer}>
              Create Card
            </PrimaryBtn>
          </KeyboardAvoidingView>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

export default connect()(CreateCard);
