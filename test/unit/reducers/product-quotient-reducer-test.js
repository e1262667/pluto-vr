const { expect } = require('chai');
const expectImmutable = require('../../helpers/expect-immutable');
const ProductQuotientReducer = require('../../../src/reducers/product-quotient-reducer');

describe('Unit', function() {
  describe('ProductQuotientReducer', function() {
    let reducer;

    beforeEach(function() {
      reducer = new ProductQuotientReducer();
    });

    it('doesn\'t mutate the array', function() {
      let array = [];
      expect(reducer.reduce(array)).to.not.equal(array);
    });

    it('handles multiple and divide', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: -5 },
        { type: 'operator', value: '*' },
        { type: 'number', value: 5 },
        { type: 'operator', value: '+' },
        { type: 'number', value: -15 },
        { type: 'operator', value: '/' },
        { type: 'number', value: 3 }
      ]).to.deep.equal([
        { type: 'number', value: -25 },
        { type: 'operator', value: '+' },
        { type: 'number', value: -5 }
      ]);
    });

    it('handles factorial', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 5 },
        { type: 'operator', value: '!' },
        { type: 'operator', value: '/' },
        { type: 'number', value: 12 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 9 }
      ]).to.deep.equal([
        { type: 'number', value: 10 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 9 }
      ]);
    });
  });
});
