import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from '@emotion/native'
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

  deleteDeck = () => {
    this.props.navigation.navigate('Decks');
  }

  render() {
    const {navigation} = this.props;
    const deck = navigation.getParam('deck');
    const {title, questions} = deck;

    return (
      <AppWrapper>
        <ViewWrapper>
          <Heading>
            <Title>{title}</Title>
            <Count>({questions.length} cards)</Count>
          </Heading>
          <ButtonsContainer>
            <PrimaryBtn onPress={() => navigation.navigate('Card', {deck, card: 0})}>Start the Deck</PrimaryBtn>
            <SecondaryBtn onPress={() => navigation.navigate('CreateCard')}>Add a Question</SecondaryBtn>
            <AltBtn onPress={this.deleteDeck}>Delete the Deck</AltBtn>
          </ButtonsContainer>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

export default Deck;
