import {AsyncStorage} from 'react-native';

const STORAGE_KEY = '@mobileFlashcards';

let decks;

export const _getDecks = async () => {
  const value = await AsyncStorage.getItem(STORAGE_KEY);

  if (value !== null) {
    decks = JSON.parse(value);
  } else {
    decks = {};
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  }

  return decks;
}

export const _addDeck = async (deck) => {
  const formattedDeck = {
    [deck]: {
      title: deck,
      questions: []
    }
  };

  decks = {
    ...decks,
    ...formattedDeck
  };

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));

  return formattedDeck;
}

export const _deleteDeck = async (deck) => {
  delete decks[deck];
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));

  return deck;
}

export const _addCard = async (deck, card) => {
  decks = {
    ...decks,
    [deck]: {
      title: deck,
      questions: [
        ...decks[deck].questions,
        card
      ]
    }
  };

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));

  return {deck, card};
}

export const _deleteCard = async (deck, card) => {
  decks = {
    ...decks,
    [deck]: {
      title: deck,
      questions: decks[deck].questions.filter(question => question.question !== card)
    }
  };

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));

  return {deck, card};
}
