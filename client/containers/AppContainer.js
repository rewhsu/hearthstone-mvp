import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

var mapStateToProps = function(state) {
  return {

  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    
  }
}

var AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;