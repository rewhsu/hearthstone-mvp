var axios = require('axios');
var apiKey = 'HjmZDGN1TsmshhOhNc3e5xN8hkPzp1Azgn8jsnYnpWIZ2bpngL';
var config = {
  headers: {'X-Mashape-Key': apiKey}
};

var getCardsByClass = function(charClass) {
  var url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${charClass}`;
  axios
    .get(url, config)
    .then(result => console.log(result))
    .catch(err => console.error(err))
}

// getCardsByClass('Hunter');