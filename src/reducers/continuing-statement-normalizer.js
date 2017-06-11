const Reducer = require('../reducer');

class ContinuingStatementNormalizer extends Reducer {
  reduceImpl(tokens, previousValue) {
    if (tokens.length && tokens[0].type === 'operator') {
      tokens.splice(0, 0, { type: 'number', value: previousValue });
    }
  }
}

module.exports = ContinuingStatementNormalizer;
