import React, { Component } from 'react';
import { Text, View, Switch, Platform } from 'react-native';
import styled from '@emotion/native'
import { Entypo } from '@expo/vector-icons';
import { AppWrapper, ViewWrapper, CenteringWrapper } from './common/Wrappers'
import { Label, TextField } from './common/FormElements'
import { PrimaryBtn, SecondaryBtn } from './common/Buttons'

const Results = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.sizes.xlarge};
  color: ${({theme}) => theme.colors.blueDark};
`

const Smiley = styled.Text`
  color: ${({theme, result}) => result === 'happy' ? theme.colors.green
    : (result === 'sad' ? theme.colors.red : theme.colors.purple)};
`

const ButtonsContainer = styled.View`
  justify-content: space-around;
`

class Completed extends Component {
  state = {
    showAnswer: false
  }

  toggleSwitch = () => {
    this.setState(currentState => ({showAnswer: !currentState.showAnswer}));
  }

  restart = () => {
    const {navigation} = this.props;
    const deck = navigation.getParam('deck');

    navigation.navigate('Card', {deck, card: 0})
  }

  correct = 1;
  total = 5;
  perc = (this.correct / this.total) * 100;
  result = this.perc === 100 ? 'happy' : (this.perc < 50 ? 'sad' : 'neutral');

  render() {
    return (
      <AppWrapper>
        <ViewWrapper>
          <View>
            <Results>{this.correct} out of {this.total}</Results>
            <Results>({this.perc}%)</Results>
          </View>
          <Smiley result={this.result}><Entypo name={`emoji-${this.result}`} size={100} /></Smiley>
          <ButtonsContainer>
            <PrimaryBtn onPress={this.restart}>
              Try again
            </PrimaryBtn>
            <SecondaryBtn onPress={() => this.props.navigation.goBack(null)}>
              Go back
            </SecondaryBtn>
          </ButtonsContainer>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

export default Completed;
