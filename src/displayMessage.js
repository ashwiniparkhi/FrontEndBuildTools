var greeting = require('./greeting');

var displayMessage = function() {
  var greet = greeting('ashwini');
  return 'Hi' + greet;
}
module.exports = displayMessage;
