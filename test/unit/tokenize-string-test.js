const { expect } = require('chai');
const tokenizeString = require('../../src/tokenize-string');

describe('Unit', function() {
  describe('tokenizeString', function() {
    it('works', function() {
      expect(tokenizeString('2+2=')).to.deep.equal([
        { type: 'number', value: 2 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 2 }
      ]);
      expect(tokenizeString('+5=')).to.deep.equal([
        { type: 'operator', value: '+' },
        { type: 'number', value: 5 }
      ]);
      expect(tokenizeString('7 + 8 C + 7 =')).to.deep.equal([
        { type: 'number', value: 7 },
        { type: 'operator', value: '+' },
        { type: 'number', value: 8 },
        { type: 'control', value: 'C' },
        { type: 'operator', value: '+' },
        { type: 'number', value: 7 }
      ]);
      expect(tokenizeString('7 + - 6 =')).to.deep.equal([
        { type: 'number', value: 7 },
        { type: 'operator', value: '+' },
        { type: 'operator', value: '-' },
        { type: 'number', value: 6 }
      ]);
      expect(tokenizeString('5! / 12 A + 9 =')).to.deep.equal([
        { type: 'number', value: 5 },
        { type: 'operator', value: '!' },
        { type: 'operator', value: '/' },
        { type: 'number', value: 12 },
        { type: 'control', value: 'A' },
        { type: 'operator', value: '+' },
        { type: 'number', value: 9 }
      ]);
      expect(tokenizeString('0.5 1/x * 2 =')).to.deep.equal([
        { type: 'number', value: 0.5 },
        { type: 'number', value: 1 },
        { type: 'operator', value: '/' },
        { type: 'name', value: 'x' },
        { type: 'operator', value: '*' },
        { type: 'number', value: 2 }
      ]);

      expect(() => tokenizeString('@')).to.throw(TypeError, 'I dont know what this character is: @');
    });
  });
});
