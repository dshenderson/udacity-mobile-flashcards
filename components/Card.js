import React, { Component } from 'react';
import { Text, View, Switch, Platform } from 'react-native';
import styled from '@emotion/native'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { handleDeleteCard } from '../actions'
import { AppWrapper, ViewWrapper, CenteringWrapper, HalfScreen } from './common/Wrappers'
import { PrimaryBtn, TertiaryBtn, AltBtn } from './common/Buttons'

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
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  margin-bottom: ${({theme}) => theme.sizes.large};
`

const DeleteBtn = styled(AltBtn)`
  width: 100%;
  margin-top: 0;
  flex-direction: row;
  justify-content: center;
`

class Card extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.getParam('deck').title} (In progress)`
  })

  state = {
    showAnswer: false,
    answeredCorrectly: this.props.navigation.getParam('answeredCorrectly') || 0
  }

  toggleSwitch = () => {
    this.setState(currentState => ({showAnswer: !currentState.showAnswer}));
  }

  handleButtonPress = (isCorrect) => {
    const {decks, navigation} = this.props;
    const deck = navigation.getParam('deck');
    const {questions} = decks[deck.title];
    const card = navigation.getParam('card');

    this.setState({showAnswer: false});

    let {answeredCorrectly} = this.state;

    if (isCorrect) {
      answeredCorrectly += 1;
      this.setState({answeredCorrectly});
    }

    const next = card + 1;

    if (next < questions.length) {
      navigation.navigate('Card', {deck, card: next, answeredCorrectly});
    } else {
      this.setState({answeredCorrectly: 0});
      navigation.navigate('Completed', {deck, answeredCorrectly});
    }
  }

  deleteCard = (deck, card) => {
    const {dispatch} = this.props;
    dispatch(handleDeleteCard(deck, card));
  }

  render() {
    const {decks, navigation} = this.props;
    const deck = navigation.getParam('deck');
    const card = navigation.getParam('card');
    const {title, questions} = decks[deck.title];
    const questionsCard = questions[card];

    if (!questionsCard) {
      return null
    }

    const {question, answer} = questionsCard;

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
                <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-up' : 'md-thumbs-up'} size={65}/>
              </PrimaryBtn>
              <TertiaryBtn onPress={() => this.handleButtonPress(false)}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-thumbs-down' : 'md-thumbs-down'} size={65}/>
              </TertiaryBtn>
              <DeleteBtn onPress={() => this.deleteCard(title, question)}>Delete this Card</DeleteBtn>
            </ButtonsContainer>
          </HalfScreen>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

function mapStateToProps(decks) {
  return {decks};
}

export default connect(mapStateToProps)(Card);
