import React from 'react';

export default class Card extends React.Component {
  
  render() {
    return (
      <div>
      {this.props.card.img ?
        <div onClick={() => this.props.selectCard(this.props.card)}>
          {this.props.card.name}
        </div>
        : null}
      </div>
    );
  }
}