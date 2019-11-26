import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { ThemeProvider } from 'emotion-theming'
import { FontAwesome } from '@expo/vector-icons';
import {theme} from './utils/theme'
import NavigationService from './NavigationService';
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
    screen: Deck
  },
  Card: {
    screen: Card
  },
  Completed: {
    screen: Completed
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'Add a Question'
    }
  }
}, {
  defaultNavigationOptions: {
    headerTintColor: theme.colors.blueDark
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

const store = createStore(reducer, middleware);

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </ThemeProvider>
    </Provider>
  );
}
