import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from '@emotion/native'
import { ViewWrapper } from './common/Wrappers'
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
      <ViewWrapper>
        <Heading>
          <Title>Deck 1</Title>
          <Count>(3 cards)</Count>
        </Heading>
        <ButtonsContainer>
          <PrimaryBtn>Start the Deck</PrimaryBtn>
          <SecondaryBtn>Add a Question</SecondaryBtn>
          <AltBtn>Delete the Deck</AltBtn>
        </ButtonsContainer>
      </ViewWrapper>
    );
  }
}

export default Deck;
