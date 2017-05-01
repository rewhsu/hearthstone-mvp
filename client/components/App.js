import React from 'react';
import CardsContainer from '../containers/CardsContainer';

export default class App extends React.Component {
  componentDidMount() {
    // Load user's info
  }
  render() {
    return (
      <div>
        <CardsContainer />
      </div>
    );
  }
}