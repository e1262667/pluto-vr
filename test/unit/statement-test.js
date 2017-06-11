const { expect } = require('chai');
const Statement = require('../../src/statement');
const sinon = require('sinon');

describe('Unit', function() {
  describe('Statement', function() {
    it('works', function() {
      let string = '2=';
      let result = 9;
      let reduce = sinon.stub().returns([{ value: result }]);
      let reducers = [{ reduce }];
      let previousValue = 5;

      let statement = new Statement(string, reducers);

      expect(statement.calculate(previousValue)).to.equal(result);
      expect(reduce.args).to.deep.equal([[
        [{ type: 'number', value: 2 }],
        previousValue
      ]]);
    });
  });
});
