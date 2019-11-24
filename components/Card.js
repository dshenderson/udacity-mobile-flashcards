import React, { Component } from 'react';
import { Text, View, Switch, Platform } from 'react-native';
import styled from '@emotion/native'
import { Ionicons } from '@expo/vector-icons';
import { ViewWrapper, CenteringWrapper } from './common/Wrappers'
import { Label, TextField } from './common/FormElements'
import { CorrectBtn, WrongBtn } from './common/Buttons'

const HalfScreen = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`

const Counter = styled.Text`
  align-self: flex-start;
  font-size: ${({theme}) => theme.sizes.normal};
  color: ${({theme}) => theme.colors.blueDark};
`

const Question = styled(Text)`
  text-align: center;
  font-size: ${({theme}) => theme.sizes.large};
  margin-bottom: ${({theme}) => theme.sizes.xlarge};
  color: ${({theme}) => theme.colors.blueDark};
`

const Answer = styled(Question)`
  color: ${({theme}) => theme.colors.purple};
  font-weight: bold;
`

const BigSwitch = styled.Switch`
  margin: ${({theme}) => theme.sizes.large};
  transform: scale(2);
`

const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`

class Card extends Component {
  state = {
    showAnswer: false
  }

  toggleSwitch = () => {
    this.setState(currentState => ({showAnswer: !currentState.showAnswer}));
  }

  render() {
    return (
      <ViewWrapper>
        <HalfScreen>
          <Counter>Card 1 of 3</Counter>
          {this.state.showAnswer ? (
            <CenteringWrapper>
              <Answer>42</Answer>
            </CenteringWrapper>
          ) : (
            <CenteringWrapper>
              <Question>What's the answer to life, the universe, and everything?</Question>
            </CenteringWrapper>
          )}
        </HalfScreen>

        <HalfScreen>
          <BigSwitch
            value={this.state.showAnswer}
            onValueChange={this.toggleSwitch}
            trackColor={{true: '#99f9', false: '#c0c0c0'}}
            thumbColor="#99f"
          />

          <ButtonsContainer>
            <CorrectBtn>
              <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-up' : 'md-thumbs-up'} size={75}/>
            </CorrectBtn>
            <WrongBtn>
              <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-down' : 'md-thumbs-down'} size={75}/>
            </WrongBtn>
          </ButtonsContainer>
        </HalfScreen>
      </ViewWrapper>
    );
  }
}

export default Card;
