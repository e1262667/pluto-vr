const Reducer = require('../reducer');

class SumDifferenceReducer extends Reducer {
  reduceImpl(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token.type !== 'operator') {
        continue;
      }

      let last = tokens[i - 1];
      let next = tokens[i + 1];

      switch (token.value) {
        case '+':
          tokens.splice(i - 1, 3, { type: 'number', value: last.value + next.value });
          i -= 2;
          break;
        case '-':
          tokens.splice(i - 1, 3, { type: 'number', value: last.value - next.value });
          i -= 2;
          break;
      }
    }
  }
}

module.exports = SumDifferenceReducer;
