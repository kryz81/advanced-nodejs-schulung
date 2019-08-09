const buildResponse = require('../buildResponse');

test('creates correct response', () => {
  expect(buildResponse('/home')).toBe('[home]');
});

test('throws error on empty url', () => {
  expect(() => buildResponse()).toThrow('Invalid url');
});
