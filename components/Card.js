import React, { Component } from 'react';
import { Text, View, Switch, Platform } from 'react-native';
import styled from '@emotion/native'
import { Ionicons } from '@expo/vector-icons';
import { AppWrapper, ViewWrapper, CenteringWrapper, HalfScreen } from './common/Wrappers'
import { Label, TextField } from './common/FormElements'
import { PrimaryBtn, TertiaryBtn } from './common/Buttons'

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
  static navigationOptions = ({navigation}) => {
    const card = navigation.getParam('card') + 1;
    const {title, questions} = navigation.getParam('deck');

    return {
      title: `${card} of ${questions.length} (${title})`
    }
  }

  state = {
    showAnswer: false
  }

  toggleSwitch = () => {
    this.setState(currentState => ({showAnswer: !currentState.showAnswer}));
  }

  handleButtonPress = (isCorrect) => {
    const {navigation} = this.props;
    const deck = navigation.getParam('deck');
    const {questions} = deck;
    const card = navigation.getParam('card');

    if (card + 1 < questions.length) {
      navigation.navigate('Card', {deck, card: card + 1});
    } else {
      navigation.navigate('Completed', {deck});
    }
  }

  render() {
    const {navigation} = this.props;
    const deck = navigation.getParam('deck');
    const card = navigation.getParam('card');
    const {title, questions} = deck;
    const {question, answer} = questions[card];

    return (
      <AppWrapper>
        <ViewWrapper>
          <HalfScreen>
            <Counter>{card + 1} of {questions.length}</Counter>
            {this.state.showAnswer ? (
              <CenteringWrapper>
                <Answer>{answer}</Answer>
              </CenteringWrapper>
            ) : (
              <CenteringWrapper>
                <Question>{question}</Question>
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
              <PrimaryBtn onPress={() => this.handleButtonPress(true)}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-up' : 'md-thumbs-up'} size={75}/>
              </PrimaryBtn>
              <TertiaryBtn onPress={() => this.handleButtonPress(false)}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-down' : 'md-thumbs-down'} size={75}/>
              </TertiaryBtn>
            </ButtonsContainer>
          </HalfScreen>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

export default Card;
