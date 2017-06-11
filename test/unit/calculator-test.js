const { expect } = require('chai');
const Calculator = require('../../src/calculator');

describe('Unit', function() {
  describe('Calculator', function() {
    it('works', function() {
      let calculator = new Calculator();
      expect(calculator.calculate('2+2=')).to.equal(4);
    });

    it('maintains state', function() {
      let calculator = new Calculator();
      calculator.calculate('2+2=');
      expect(calculator.calculate('+5=')).to.equal(9);
    });

    it('clears state', function() {
      let calculator = new Calculator();
      calculator.calculate('2+2=');
      expect(calculator.calculate('7 + - 6 =')).to.equal(1);
    });
  });
});
