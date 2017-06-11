#!/usr/bin/env node
'use strict';

const Calculator = require('../src/calculator');

let calculator = new Calculator();

process.stdin.on('data', function(data) {
  let string = data.toString().replace('\n', '');

  if (string.includes('Q')) {
    process.exit();
  }

  let result = calculator.calculate(string);

  process.stdout.write(`${result}\n`);
});
