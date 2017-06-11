function createReducer(func) {
  return function reducer(tokens, ...args) {
    tokens = tokens.slice();

    func(tokens, ...args);

    return tokens;
  };
}

module.exports = createReducer;
