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

const deckStats = function(state = {}, action) {
  switch (action.type) {
    // case 'ADD_CARD':
    //   return {
    //     ...state,
    //     count: action.count + 1,
    //   }
    case 'DSTATS_UPDATE':
      return {
        charClass: action.charClass,
        count: action.count,
      }
    default:
      return state
  }
}

const myApp = combineReducers({
  cards,
  selectedCard,
  deckStats,
})

export default myApp;