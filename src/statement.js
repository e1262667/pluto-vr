const tokenizeString = require('./tokenize-string');

class Statement {
  constructor(string, reducers) {
    this._string = string;
    this._reducers = reducers;
  }

  calculate(previousValue) {
    let tokens = tokenizeString(this._string);

    for (let reducer of this._reducers) {
      tokens = reducer.reduce(tokens, previousValue);
    }

    return tokens[0].value;
  }
}

module.exports = Statement;
