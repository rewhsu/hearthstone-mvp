import React from 'react';
import { connect } from 'react-redux';
import { cardsUpdate } from '../actions/actions';

import ClassCards from '../components/ClassCards';
var data = require('../../public/data/hunter-data.json');
console.log('hunter data', data);

var mapStateToProps = function(state) {
  return {
    classCards: data,
  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    updateCards: (cards) => {
      dispatch(cardsUpdate(cards))
    }
  }
}

var CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassCards);

export default CardsContainer;