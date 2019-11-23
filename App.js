import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components'
import Decks from './components/Decks';

const AppWrapper = styled.View`
  flex: 1;
  padding: 32px 16px;
  background-color: #def;
  align-items: center;
  justify-content: flex-start;
`

export default function App() {
  return (
    <AppWrapper>
      <Decks/>
    </AppWrapper>
  );
}
