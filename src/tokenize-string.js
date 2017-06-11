function tokenizeString(string) {
  let current = 0;
  let tokens = [];

  while (current < string.length) {
    let char = string[current];

    // without `\s`, '0.5 1/x' would be treated as '0.51/x'
    if (/[\s=]/.test(char)) {
      current++;

      continue;
    }

    if (/[AC]/.test(char)) {
      tokens.push({ type: 'control', value: char });

      current++;

      continue;
    }

    if (/[+\-*/!]/.test(char)) {
      tokens.push({ type: 'operator', value: char });

      current++;

      continue;
    }

    let NUMBERS = /[0-9.]/;
    if (NUMBERS.test(char)) {
      let value = '';

      while (NUMBERS.test(char)) {
        value += char;
        char = string[++current];
      }

      tokens.push({ type: 'number', value: parseFloat(value) });

      continue;
    }

    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = string[++current];
      }

      tokens.push({ type: 'name', value });

      continue;
    }

    throw new TypeError(`I dont know what this character is: ${char}`);
  }

  return tokens;
}

module.exports = tokenizeString;
