const { expect } = require('chai');
const expectImmutable = require('../../helpers/expect-immutable');
const SumDifferenceReducer = require('../../../src/reducers/sum-difference-reducer');

describe('Unit', function() {
  describe('SumDifferenceReducer', function() {
    let reducer;

    beforeEach(function() {
      reducer = new SumDifferenceReducer();
    });

    it('doesn\'t mutate the array', function() {
      let array = [];
      expect(reducer.reduce(array)).to.not.equal(array);
    });

    it('handles add and subtract', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: -5 },
        { type: 'operator', value: '-' },
        { type: 'number', value: 5 },
        { type: 'operator', value: '+' },
        { type: 'number', value: -15 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 3 }
      ]).to.deep.equal([
        { type: 'number', value: -22 }
      ]);
    });
  });
});
