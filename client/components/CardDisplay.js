import React from 'react';
// import cardback from '../../public/images/cardback.png';

export default class CardDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.selectedCard.img ?
          <img src={this.props.selectedCard.img} />
          // : <img src='http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-default-201x300.png' />
          : null
        }
      </div>
    );
  }
}