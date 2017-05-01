import React from 'react';
import { connect } from 'react-redux';
import { cardsUpdate, cardSelect } from '../actions/actions';

import ClassCards from '../components/ClassCards.js';
var data = require('../../public/data/hunter-data.json');
console.log('hunter data', data);

var mapStateToProps = function(state) {
  return {
    classCards: data,
    selectedCard: state.selectedCard,
  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    updateCards: (cards) => {
      dispatch(cardsUpdate(cards))
    },
    selectCard: (card) => {
      dispatch(cardSelect(card));
    }
  }
}

var CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassCards);

export default CardsContainer;