var mongoose = require('mongoose');

var cardsSchema = mongoose.Schema({
  cards: [{ charClass: String, id: String, date: Date }]
});

var CardsModel = mongoose.model('Cards', cardsSchema);

module.exports = CardsModel;