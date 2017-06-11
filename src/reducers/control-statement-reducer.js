const Reducer = require('../reducer');

class ControlStatementReducer extends Reducer {
  reduceImpl(tokens) {
    for (let i = tokens.length - 1; i >= 0; i--) {
      let token = tokens[i];
      if (token.type !== 'control') {
        continue;
      }

      switch (token.value) {
        case 'A':
          tokens.splice(0, i + 1);
          return;
        case 'C': {
          let start = i - 2;
          let deleteCount = 3;
          if (start < 0) {
            deleteCount += start;
            start = 0;
          }
          tokens.splice(start, deleteCount);
          i -= deleteCount - 1;
          break;
        }
      }
    }
  }
}

module.exports = ControlStatementReducer;
