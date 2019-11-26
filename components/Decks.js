import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import styled from '@emotion/native'
import { connect } from 'react-redux'
import {handleGetDecks} from '../actions'
import {isEmpty} from '../utils/helpers';
import { AppWrapper, ViewWrapper } from './common/Wrappers'

const KeinDecks = styled(ViewWrapper)`
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
  componentDidMount() {
    const {decks, dispatch} = this.props;

    if (isEmpty(decks)) {
      dispatch(handleGetDecks());
    }
  }

  render() {
    const {decks} = this.props;

    if (isEmpty(decks)) {
      return (
        <AppWrapper>
          <KeinDecks>
            <KeinDecksText>No decks available!</KeinDecksText>
          </KeinDecks>
        </AppWrapper>
      );
    }

    const deckArray = Object.keys(decks).map(key => decks[key]);

    return (
      <AppWrapper>
        <FlatList data={deckArray} renderItem={({item: deck}, index) => {
          const {title, questions} = deck;
          return (
            <Deck onPress={() => this.props.navigation.navigate('Deck', {deck})}>
              <Title>{title}</Title>
              <Count>({questions && questions.length} cards)</Count>
            </Deck>
          );
        }} keyExtractor={deck => deck.title} />
      </AppWrapper>
    );
  }
}

function mapStateToProps(decks) {
  return {decks};
}

export default connect(mapStateToProps)(Decks);
