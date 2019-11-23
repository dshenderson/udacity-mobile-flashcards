import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import styled from 'styled-components'

const KeinDecks = styled.View`
  flex: 1;
  justify-content: center;
`

const KeinDecksText = styled.Text`
  font-size: 32px;
  font-style: italic;
  color: #f36;
`

const Deck = styled.TouchableOpacity`
  width: 320px;
  margin-bottom: 8px;
  padding: 16px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  border-radius: 8px;
  align-items: center;
`

const Title = styled.Text`
  font-size: 32px;
  color: #009;
`

const Count = styled.Text`
  font-size: 16px;
  color: #66c;
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
