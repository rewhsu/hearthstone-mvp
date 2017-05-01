var axios = require('axios');
var apiKey = 'HjmZDGN1TsmshhOhNc3e5xN8hkPzp1Azgn8jsnYnpWIZ2bpngL';
var config = {
  headers: {'X-Mashape-Key': apiKey}
};
var data = require('../public/data/hunter-data.json');

var getCardsByClass = function(charClass) {
  // var url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${charClass}`;
  var url = '../public/data/hunter-data.json'
  return axios
    // .get(url, config)
    .get(url)
    .then(result => console.log(result))
    .catch(err => console.error(err))
}

getCardsByClass('Hunter');