/* eslint-disable no-undef */
const sum = require('../sum'); // ou '../dist/sum' si tu veux tester le build

describe('sum()', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
