import greeting from './greeting';

let displayMessage = function() {
  let greet = greeting('ashwini');
  return 'Hi' + greet;
}
export default displayMessage;
