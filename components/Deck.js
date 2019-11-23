import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components'

const DeckWrapper = styled.TouchableOpacity`
  flex: 1;
  width: 320px;
  padding: 16px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`

const Heading = styled.View`
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

const ButtonsContainer = styled.View`
  margin-bottom: 64px;
`

const StartBtn = styled.TouchableOpacity`
  margin-bottom: 8px;
  padding: 8px 16px;
  background-color: green;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  border-radius: 8px;
`

const AddBtn = styled(StartBtn)`
  background-color: orange;
`

const DeleteBtn = styled.TouchableOpacity`
  margin: 16px auto;
`

const BtnTxt = styled.Text`
  font-size: ${({type}) => type === 'dele' ? '16px' : '32px'};
  color: ${({type}) => type === 'dele' ? '#f36' : type === 'add' ? 'black' : 'white'};
  text-decoration: ${({type}) => type === 'dele' ? 'underline' : 'none'};
`

class Deck extends Component {
  render() {
    return (
      <DeckWrapper>
        <Heading>
          <Title>Deck 1</Title>
          <Count>(3 cards)</Count>
        </Heading>
        <ButtonsContainer>
          <StartBtn>
            <BtnTxt>Start the Deck</BtnTxt>
          </StartBtn>
          <AddBtn>
            <BtnTxt type="add">
              Add a Question
            </BtnTxt>
          </AddBtn>
          <DeleteBtn>
            <BtnTxt type="dele">Delete the Deck</BtnTxt>
          </DeleteBtn>
        </ButtonsContainer>
      </DeckWrapper>
    );
  }
}

export default Deck;
