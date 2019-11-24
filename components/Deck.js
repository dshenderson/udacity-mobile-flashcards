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
  render() {
    return (
      <AppWrapper>
        <ViewWrapper>
          <Heading>
            <Title>Deck 1</Title>
            <Count>(3 cards)</Count>
          </Heading>
          <ButtonsContainer>
            <PrimaryBtn onPress={() => this.props.navigation.navigate('Card')}>Start the Deck</PrimaryBtn>
            <SecondaryBtn onPress={() => this.props.navigation.navigate('CreateCard')}>Add a Question</SecondaryBtn>
            <AltBtn>Delete the Deck</AltBtn>
          </ButtonsContainer>
        </ViewWrapper>
      </AppWrapper>
    );
  }
}

export default Deck;
