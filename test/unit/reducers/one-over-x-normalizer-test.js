const { expect } = require('chai');
const expectImmutable = require('../../helpers/expect-immutable');
const OneOverXNormalizer = require('../../../src/reducers/one-over-x-normalizer');

describe('Unit', function() {
  describe('OneOverXNormalizer', function() {
    let reducer;

    beforeEach(function() {
      reducer = new OneOverXNormalizer();
    });

    it('doesn\'t mutate the array', function() {
      let array = [];
      expect(reducer.reduce(array)).to.not.equal(array);
    });

    it('works', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 0.5 },
        { type: 'number', value: 1 },
        { type: 'operator', value: '/' },
        { type: 'name', value: 'x' },
        { type: 'operator', value: '*' },
        { type: 'number', value: 2 }
      ]).to.deep.equal([
        { type: 'number', value: 1 },
        { type: 'operator', value: '/' },
        { type: 'number', value: 0.5 },
        { type: 'operator', value: '*' },
        { type: 'number', value: 2 }
      ]);
    });
  });
});
