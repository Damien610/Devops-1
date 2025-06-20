/* eslint-disable no-undef */

const sum = require('../public/sum');


describe('sum()', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
