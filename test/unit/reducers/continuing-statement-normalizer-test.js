const { expect } = require('chai');
const expectImmutable = require('../../helpers/expect-immutable');
const ContinuingStatementNormalizer = require('../../../src/reducers/continuing-statement-normalizer');

describe('Unit', function() {
  describe('ContinuingStatementNormalizer', function() {
    let reducer;

    beforeEach(function() {
      reducer = new ContinuingStatementNormalizer();
    });

    it('doesn\'t mutate the array', function() {
      let array = [];
      expect(reducer.reduce(array)).to.not.equal(array);
    });

    it('works', function() {
      expectImmutable(tokens => reducer.reduce(tokens, 6), () => [
        { type: 'number', value: 7 }
      ]).to.deep.equal([
        { type: 'number', value: 7 }
      ]);
      expectImmutable(tokens => reducer.reduce(tokens, 6), () => [
        { type: 'operator', value: '+' }
      ]).to.deep.equal([
        { type: 'number', value: 6 },
        { type: 'operator', value: '+' }
      ]);
    });
  });
});
