const Reducer = require('../reducer');

class ProductQuotientReducer extends Reducer {
  reduceImpl(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token.type !== 'operator') {
        continue;
      }

      let last = tokens[i - 1];
      let next = tokens[i + 1];

      switch (token.value) {
        case '!':
          tokens.splice(i - 1, 2, { type: 'number', value: factorial(last.value) });
          i--;
          break;
        case '*':
          tokens.splice(i - 1, 3, { type: 'number', value: last.value * next.value });
          i -= 2;
          break;
        case '/':
          tokens.splice(i - 1, 3, { type: 'number', value: last.value / next.value });
          i -= 2;
          break;
      }
    }
  }
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = ProductQuotientReducer;
