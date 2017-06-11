class Reducer {
  reduce(tokens, previousValue) {
    tokens = tokens.slice();

    this.reduceImpl(tokens, previousValue);

    return tokens;
  }
}

module.exports = Reducer;
