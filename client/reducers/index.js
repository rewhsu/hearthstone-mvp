import { combineReducers } from 'redux';

const cards = function(state = [], action) {
  switch (action.type) {
    case 'ADD_CARD':
      return [...state, card];
    default:
      return state
  }
}

const card = function(state = {}, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return action.card;
    default:
      return state
  }
}

const selectedCard = function(state = {}, action) {
  switch (action.type) {
    case 'CARD_SELECT':
      return action.card;
    default:
      return state
  }
}

const myApp = combineReducers({
  cards,
  selectedCard,
})

export default myApp;