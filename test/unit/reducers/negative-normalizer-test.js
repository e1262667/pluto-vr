const { expect } = require('chai');
const expectImmutable = require('../../helpers/expect-immutable');
const NegativeNormalizer = require('../../../src/reducers/negative-normalizer');

describe('Unit', function() {
  describe('NegativeNormalizer', function() {
    let reducer;

    beforeEach(function() {
      reducer = new NegativeNormalizer();
    });

    it('doesn\'t mutate the array', function() {
      let array = [];
      expect(reducer.reduce(array)).to.not.equal(array);
    });

    it('works', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 7 },
        { type: 'operator', value: '+' },
        { type: 'operator', value: '-' },
        { type: 'number', value: 6 }
      ]).to.deep.equal([
        { type: 'number', value: 7 },
        { type: 'operator', value: '+' },
        { type: 'number', value: -6 }
      ]);
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 5 },
        { type: 'operator', value: '*' },
        { type: 'number', value: 5 },
        { type: 'operator', value: '-' },
        { type: 'number', value: 15 },
        { type: 'operator', value: '/' },
        { type: 'number', value: 3 }
      ]).to.deep.equal([
        { type: 'number', value: 5 },
        { type: 'operator', value: '*' },
        { type: 'number', value: 5 },
        { type: 'operator', value: '-' },
        { type: 'number', value: 15 },
        { type: 'operator', value: '/' },
        { type: 'number', value: 3 }
      ]);
    });
  });
});
