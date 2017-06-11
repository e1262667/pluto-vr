const Reducer = require('../reducer');

class NegativeNormalizer extends Reducer {
  reduceImpl(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token.type !== 'operator') {
        continue;
      }

      let last = tokens[i - 1];
      let next = tokens[i + 1];

      switch (token.value) {
        case '-':
          if (last.type === 'operator') {
            tokens.splice(i, 2, { type: 'number', value: next.value * -1 });
            i--;
          }
          break;
      }
    }
  }
}

module.exports = NegativeNormalizer;
