import {
  _getDecks,
  _addDeck,
  _deleteDeck,
  _addCard,
  _deleteCard
} from '../utils/api'
import NavigationService from '../NavigationService';

export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function handleGetDecks() {
  return dispatch => {
    return _getDecks()
      .then(decks => dispatch(getDecks(decks)))
  };
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function handleAddDeck(deck) {
  return dispatch => {
    return _addDeck(deck)
      .then(deck => dispatch(addDeck(deck)))
      .then(() => NavigationService.navigate('Decks'));
  };
}

function deleteDeck(deck) {
  return {
    type: DELETE_DECK,
    deck
  };
}

export function handleDeleteDeck(deck) {
  return dispatch => {
    return _deleteDeck(deck)
      .then(deck => dispatch(deleteDeck(deck)))
      .then(() => NavigationService.navigate('Decks'));
  };
}

function addCard(deck, card) {
  return {
    type: ADD_CARD,
    deck,
    card
  };
}

export function handleAddCard(deck, card) {
  return (dispatch) => {
    return _addCard(deck, card)
      .then(({deck, card}) => dispatch(addCard(deck, card)))
      .then(() => NavigationService.navigate('Deck'));
  };
}

function deleteCard(deck, card) {
  return {
    type: DELETE_CARD,
    deck,
    card
  };
}

export function handleDeleteCard(deck, card) {
  return (dispatch) => {
    return _deleteCard(deck, card)
      .then(({deck, card}) => dispatch(deleteCard(deck, card)))
      .then(() => NavigationService.navigate('Deck'));
  };
}
