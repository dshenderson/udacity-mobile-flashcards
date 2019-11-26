import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from '@emotion/native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions'
import { AppWrapper, ViewWrapper } from './common/Wrappers'
import { PrimaryBtn, SecondaryBtn, AltBtn } from './common/Buttons'

const Heading = styled.View`
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

const ButtonsContainer = styled.View`
  margin-bottom: ${({theme}) => theme.sizes.xlarge};
`

class Deck extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `Deck (${navigation.getParam('deck').title})`
  })

  render() {
    const {decks, dispatch, navigation} = this.props;
    const deck = navigation.getParam('deck');
    const {title, questions} = decks[deck.title];

    return (
      <AppWrapper>
        <ViewWrapper>
          <Heading>
            <Title>{title}</Title>
            <Count>({questions && questions.length} cards)</Count>
          </Heading>
          <ButtonsContainer>
            {!!questions.length && (
              <PrimaryBtn onPress={() => navigation.navigate('Card', {deck, card: 0})}>Start the Deck</PrimaryBtn>
            )}
            <SecondaryBtn onPress={() => navigation.navigate('CreateCard', {deck})}>Add a Card</SecondaryBtn>
            <AltBtn onPress={() => dispatch(handleDeleteDeck(title))}>Delete this Deck</AltBtn>
          </ButtonsContainer>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

function mapStateToProps(decks) {
  return {decks};
}

export default connect(mapStateToProps)(Deck);
