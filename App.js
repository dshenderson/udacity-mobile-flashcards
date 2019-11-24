import React from 'react';
import { View } from 'react-native';
import styled from '@emotion/native'
import { ThemeProvider } from 'emotion-theming'
import {theme} from './utils/theme'
import Card from './components/Card';

const AppWrapper = styled(View)`
  flex: 1;
  padding: ${({theme}) => theme.sizes.large} ${({theme}) => theme.sizes.normal};
  background-color: ${({theme}) => theme.colors.blueLight};
  align-items: center;
  justify-content: flex-start;
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Card />
      </AppWrapper>
    </ThemeProvider>
  );
}
