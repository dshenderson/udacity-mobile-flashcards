import React from 'react';
import { View } from 'react-native';
import styled from '@emotion/native'
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { ThemeProvider } from 'emotion-theming'
import { FontAwesome } from '@expo/vector-icons';
import {theme} from './utils/theme'
import Deck from './components/Deck';
import Decks from './components/Decks';
import CreateDeck from './components/CreateDeck';
import CreateCard from './components/CreateCard';
import Card from './components/Card';
import Completed from './components/Completed';

const Navigator = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck 1',
      headerTintColor: theme.colors.blueDark
    }
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'Add a Question',
      headerTintColor: theme.colors.blueDark
    }
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: 'Question',
      headerTintColor: theme.colors.blueDark
    }
  },
  Completed: {
    screen: Completed,
    navigationOptions: {
      title: 'Deck Complete',
      headerTintColor: theme.colors.blueDark
    }
  }
})

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Navigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <FontAwesome name="home" size={30} color={tintColor} />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Add a Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: theme.colors.blueDark,
    inactiveTintColor: theme.colors.purple
  }
});

const AppContainer = createAppContainer(Tabs);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}
