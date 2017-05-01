import React from 'react';
import Card from './Card';

export default class ClassCards extends React.Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <div>
          {this.props.classCards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    );
  }
}