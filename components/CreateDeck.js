import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import {handleAddDeck} from '../actions';
import { AppWrapper, FormWrapper, ViewWrapper } from './common/Wrappers'
import { TextField } from './common/FormElements'
import { PrimaryBtn } from './common/Buttons'

class CreateDeck extends Component {
  state = {
    value: ''
  }

  handleChange = text => {
    this.setState({value: text});
  }

  createDeck = () => {
    const {dispatch, navigation} = this.props;

    dispatch(handleAddDeck(this.state.value));

    this.setState({value: ''});
  }

  render() {
    return (
      <AppWrapper>
        <KeyboardAvoidingView behavior="padding">
          <ViewWrapper layout="compact">
            <FormWrapper>
              <TextField
                placeholder="Enter a name"
                placeholderTextColor="silver"
                value={this.state.value}
                onChangeText={this.handleChange}
                underlineColorAndroid="transparent"
              />
            </FormWrapper>
            <PrimaryBtn onPress={this.createDeck} disabled={!this.state.value}>Create Deck</PrimaryBtn>
          </ViewWrapper>
        </KeyboardAvoidingView>
      </AppWrapper>
    );
  }
}

export default connect()(CreateDeck);
