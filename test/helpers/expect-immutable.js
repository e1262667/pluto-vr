const { expect } = require('chai');

module.exports = function expectImmutable(func, factory) {
  let oldVal = factory();
  let newVal = func(oldVal);
  expect(oldVal).to.deep.equal(factory());
  return expect(newVal);
};
