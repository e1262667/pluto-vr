const { expect } = require('chai');
const { spawn } = require('child_process');

describe('Acceptance', function() {
  describe('Calculator', function() {
    let cp;

    beforeEach(function() {
      cp = spawn('node', ['bin/calculator']);
    });

    afterEach(function() {
      cp.kill('SIGINT');
    });

    it('works', function(done) {
      cp.stdout.on('data', data => {
        expect(data.toString()).to.equal('4\n');

        done();
      });

      cp.stdin.write('2+2=\n');
    });

    it('maintains state', function(done) {
      let isFirstCall = true;
      cp.stdout.on('data', data => {
        if (isFirstCall) {
          isFirstCall = false;

          return cp.stdin.write('+5=\n');
        }

        expect(data.toString()).to.equal('9\n');

        done();
      });

      cp.stdin.write('2+2=\n');
    });

    it('clears state', function(done) {
      let isFirstCall = true;
      cp.stdout.on('data', data => {
        if (isFirstCall) {
          isFirstCall = false;

          return cp.stdin.write('7 + - 6 =\n');
        }

        expect(data.toString()).to.equal('1\n');

        done();
      });

      cp.stdin.write('2+2=\n');
    });

    it('exits with Q', function(done) {
      cp.on('exit', done);

      cp.stdin.write('Q\n');
    });
  });
});
