// import AsyncStorage from '@react-native-community/async-storage';
//
// const STORAGE_KEY = '@mobileFlashcards'

let decks = {
  // React: {
  //   title: 'React',
  //   questions: [
  //     {
  //       question: 'What is React?',
  //       answer: 'A library for managing user interfaces'
  //     },
  //     {
  //       question: 'Where do you make Ajax requests in React?',
  //       answer: 'The componentDidMount lifecycle event'
  //     }
  //   ]
  // },
  // JavaScript: {
  //   title: 'JavaScript',
  //   questions: [
  //     {
  //       question: 'What is a closure?',
  //       answer: 'The combination of a function and the lexical environment within which that function was declared.'
  //     }
  //   ]
  // }
}

// export function _getDecks() {
//   return AsyncStorage.getData(STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

export function _getDecks() {
  return new Promise(res => {
    setTimeout(() => res({...decks}), 1000);
  });
}

export function _addDeck(deck) {
  const formattedDeck = {
    [deck]: {
      title: deck,
      questions: []
    }
  };

  return new Promise(res => {
    setTimeout(() => {
      decks = {
        ...decks,
        [deck]: {
          title: deck,
          questions: []
        }
      };

      res(formattedDeck);
    }, 1000);
  });
}

export function _deleteDeck(deck) {
  return new Promise(res => {
    setTimeout(() => {
      decks[deck] = undefined;
      delete decks[deck];

      res(deck);
    }, 1000);
  });
}

export function _addCard(deck, card) {
  return new Promise(res => {
    setTimeout(() => {
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

      res({deck, card});
    }, 1000);
  });
}

export function _deleteCard(deck, card) {
  return new Promise(res => {
    setTimeout(() => {
      decks = {
        ...decks,
        [deck]: {
          title: deck,
          questions: decks[deck].questions.filter(question => question.question !== card)
        }
      };

      res({deck, card});
    })
  }).catch(e => {
    console.error(e)
  })
}

// export function getDecks(id) {
//   return AsyncStorage.getData(STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }
//
// export function getDecks() {
//   return AsyncStorage.getData(STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }
//
// export function removeEntry(key) {
//   return AsyncStorage.getItem(STORAGE_KEY)
//     .then(results => {
//       const data = JSON.parse(results);
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }
