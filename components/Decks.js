import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import styled from '@emotion/native'

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
    decks: [
      {
        title: 'Deck 1',
        questions: []
      },
      {
        title: 'Deck 2',
        questions: [{}, {}]
      },
      {
        title: 'Deck 3',
        questions: [{}]
      }
    ]
  }

  render() {
    if (!this.state.decks.length) {
      return (
        <KeinDecks>
          <KeinDecksText>No decks available!</KeinDecksText>
        </KeinDecks>
      );
    }

    return (
      <View>
        <FlatList data={this.state.decks} renderItem={({item: deck}) => (
          <Deck>
            <Title>{deck.title}</Title>
            <Count>({deck.questions.length} cards)</Count>
          </Deck>
        )} keyExtractor={deck => deck.title} />
      </View>
    );
  }
}

export default Decks;
