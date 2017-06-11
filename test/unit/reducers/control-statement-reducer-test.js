const { expect } = require('chai');
const expectImmutable = require('../../helpers/expect-immutable');
const ControlStatementReducer = require('../../../src/reducers/control-statement-reducer');

describe('Unit', function() {
  describe('ControlStatementReducer', function() {
    let reducer;

    beforeEach(function() {
      reducer = new ControlStatementReducer();
    });

    it('doesn\'t mutate the array', function() {
      let array = [];
      expect(reducer.reduce(array)).to.not.equal(array);
    });

    it('works', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 2 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 2 }
      ]).to.deep.equal([
        { type: 'number', value: 2 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 2 }
      ]);
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 7 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 8 },
        { type: 'control', value: 'C' },
        { type: 'operator', value: '+' },
        { type: 'number', value: 7 }
      ]).to.deep.equal([
        { type: 'number', value: 7 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 7 }
      ]);
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 5 },
        { type: 'operator', value: '!' },
        { type: 'operator', value: '/' },
        { type: 'number', value: 12 },
        { type: 'control', value: 'A' },
        { type: 'operator', value: '+' },
        { type: 'number', value: 9 }
      ]).to.deep.equal([
        { type: 'operator', value: '+' },
        { type: 'number', value: 9 }
      ]);
    });

    it('can clear first number', function() {
      expectImmutable(tokens => reducer.reduce(tokens), () => [
        { type: 'number', value: 8 },
        { type: 'control', value: 'C' },
        { type: 'operator', value: '+' },
        { type: 'number', value: 7 }
      ]).to.deep.equal([
        { type: 'operator', value: '+' },
        { type: 'number', value: 7 }
      ]);
    });
  });
});
