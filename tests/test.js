const chai = require('chai');
const expect = chai.expect;

describe('number test', () => {
  it('should equal 2', (done) => {
    expect(1 + 1, 2);
    done();
  });
});
