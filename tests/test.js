const chai = require('chai');
const expect = chai.expect;

describe('number test', () => {
  it('1 plus 1 should equal 2', (done) => {
    expect(1 + 1, 2);
    done();
  });
});
