import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import styled from '@emotion/native'
import { AppWrapper } from './common/Wrappers'

const KeinDecks = styled.View`
  flex: 1;
  justify-content: center;
`

const KeinDecksText = styled.Text`
  font-size: ${({theme}) => theme.sizes.large};
  font-style: italic;
  color: ${({theme}) => theme.colors.red};
`

const Deck = styled.TouchableOpacity`
  width: ${({theme}) => theme.sizes.full};
  margin-bottom: ${({theme}) => theme.sizes.small};
  padding: ${({theme}) => theme.sizes.normal};
  background-color: ${({theme}) => theme.colors.white};
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.silver};
  border-radius: ${({theme}) => theme.sizes.small};
  align-items: center;
`

const Title = styled.Text`
  font-size: ${({theme}) => theme.sizes.large};
  color: ${({theme}) => theme.colors.blueDark};
`

const Count = styled.Text`
  font-size: ${({theme}) => theme.sizes.normal};
  color: ${({theme}) => theme.colors.blueDark};
`

class Decks extends Component {
  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }

  render() {
    const decks = Object.keys(this.state.decks).map(key => this.state.decks[key]);

    if (!decks.length) {
      return (
        <AppWrapper>
          <KeinDecks>
            <KeinDecksText>No decks available!</KeinDecksText>
          </KeinDecks>
        </AppWrapper>
      );
    }

    return (
      <AppWrapper>
        <FlatList data={decks} renderItem={({item: deck}, index) => {
          const {title, questions} = deck;
          return (
            <Deck onPress={() => this.props.navigation.navigate('Deck', {deck})}>
              <Title>{title}</Title>
              <Count>({questions.length} cards)</Count>
            </Deck>
          );
        }} keyExtractor={deck => deck.title} />
      </AppWrapper>
    );
  }
}

export default Decks;
