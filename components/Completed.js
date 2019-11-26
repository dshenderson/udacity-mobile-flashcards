import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from '@emotion/native'
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import { AppWrapper, ViewWrapper } from './common/Wrappers'
import { PrimaryBtn, SecondaryBtn } from './common/Buttons'

const Results = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.sizes.large};
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
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.getParam('deck').title} (Completed)`
  })

  getResults = () => {
    const {decks, navigation} = this.props;
    const correct = navigation.getParam('answeredCorrectly');
    const deck = navigation.getParam('deck');
    const {questions} = decks[deck.title];
    const total = questions.length;
    const perc = (correct / total) * 100;
    const grade = perc === 100 ? 'happy' : (perc < 50 ? 'sad' : 'neutral');

    return {correct, total, perc, grade};
  }

  render() {
    const {navigation} = this.props;
    const deck = navigation.getParam('deck');

    const {correct, total, perc, grade} = this.getResults();

    return (
      <AppWrapper>
        <ViewWrapper>
          <View>
            <Results>{correct} out of {total}</Results>
            <Results>({perc}%)</Results>
          </View>
          <Smiley result={grade}><Entypo name={`emoji-${grade}`} size={100} /></Smiley>
          <ButtonsContainer>
            <PrimaryBtn onPress={() => navigation.navigate('Card', {deck, card: 0, answeredCorrectly: 0})}>
              Try again
            </PrimaryBtn>
            <SecondaryBtn onPress={() => navigation.navigate('Deck', {deck})}>
              Go back
            </SecondaryBtn>
          </ButtonsContainer>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

function mapStateToProps(decks) {
  return {decks};
}

export default connect(mapStateToProps)(Completed);
