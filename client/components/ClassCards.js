import React from 'react';
import Card from './Card';
import CardDisplay from './CardDisplay';
import styles from './ClassCards.css';
import DeckStats from './DeckStats';

export default class ClassCards extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.deckStats} />
              <DeckStats deckStats={this.props.deckStats}/>
            </div>
            <div className={styles.list}>
              {this.props.classCards.map((card) => (
                <Card card={card} selectCard={this.props.selectCard}/>
              ))}
            </div>
          <div className={styles.image}>
            <CardDisplay selectedCard={this.props.selectedCard} />
          </div>
        </div>
        <button className={styles.button}>Add to Deck</button>
        <button className={styles.button}>Save Deck</button>
      </div>
    );
  }
}