import React from 'react';
import Card from './Card';
import CardDisplay from './CardDisplay';
import styles from './ClassCards.css';

export default class ClassCards extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {this.props.classCards.map((card) => (
            <Card card={card} selectCard={this.props.selectCard}/>
          ))}
        </div>
        <div className={styles.image}>
          <CardDisplay selectedCard={this.props.selectedCard} />
        </div>
      </div>
    );
  }
}