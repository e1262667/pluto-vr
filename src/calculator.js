const ContinuingStatementNormalizer = require('./reducers/continuing-statement-normalizer');
const NegativeNormalizer = require('./reducers/negative-normalizer');
const ControlStatementReducer = require('./reducers/control-statement-reducer');
const OneOverXNormalizer = require('./reducers/one-over-x-normalizer');
const ProductQuotientReducer = require('./reducers/product-quotient-reducer');
const SumDifferenceReducer = require('./reducers/sum-difference-reducer');
const Statement = require('./statement');

class Calculator {
  constructor() {
    this._value = 0;
    this._reducers = [
      new ContinuingStatementNormalizer(),
      new NegativeNormalizer(),
      new ControlStatementReducer(),
      new OneOverXNormalizer(),
      new ProductQuotientReducer(),
      new SumDifferenceReducer()
    ];
  }

  calculate(string) {
    let statement = new Statement(string, this._reducers);

    this._value = statement.calculate(this._value);

    return this._value;
  }
}

module.exports = Calculator;
