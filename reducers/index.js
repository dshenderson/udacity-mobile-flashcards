import {
  GET_DECKS,
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD,
  DELETE_CARD
} from '../actions';

export default function decks(state = {}, action) {
  if (action.type === GET_DECKS) {
    return {
      ...state,
      ...action.decks
    };
  }

  if (action.type === ADD_DECK) {
    return {
      ...state,
      ...action.deck
    };
  }

  if (action.type === DELETE_DECK) {
    const copy = {...state};
    delete copy[action.deck];
    return {
      ...copy
    };
  }

  if (action.type === ADD_CARD) {
    return {
      ...state,
      [action.deck]: {
        title: action.deck,
        questions: [
          ...state[action.deck].questions,
          action.card
        ]
      }
    };
  }

  if (action.type === DELETE_CARD) {
    return {
      ...state,
      [action.deck]: {
        title: action.deck,
        questions: state[action.deck].questions.filter(question => question.question !== action.card)
      }
    };
  }

  return state;
}
