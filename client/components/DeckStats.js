import React from 'react';

export default class DeckStats extends React.Component {
  
  render() {
    return (
      <div>
        Class: {this.props.deckStats.charClass}
      </div>
    );
  }
}