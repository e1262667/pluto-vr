const Reducer = require('../reducer');

class OneOverXNormalizer extends Reducer {
  reduceImpl(tokens) {
    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token.type !== 'name') {
        continue;
      }

      switch (token.value) {
        case 'x': {
          let denominatorIndex = i - 3;
          tokens.splice(i, 1, { type: 'number', value: tokens[denominatorIndex].value });
          tokens.splice(denominatorIndex, 1);
          i--;
          break;
        }
      }
    }
  }
}

module.exports = OneOverXNormalizer;
