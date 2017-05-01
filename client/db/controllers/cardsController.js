var CardsModel = require('../models/cardsModel.js');

function findAll(callback) {
  CardsModel.find({}, callback);
}

function findOne(id, callback) {
  CardsModel.find({id: id}, callback);
}

function findByName(name, callback) {
  CardsModel.find({name: name}, callback);
}

function saveCards(cards, callback) {
  CardsModel.create(cards, callback);
}

exports.findOne = findOne;
exports.findOneByName = findOneByName;
exports.findAll = findAll;
exports.saveCards = saveCards;