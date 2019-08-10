const { say } = require('../');

test('returns message', () => {
  expect(say('hi')).toBe('Say hi');
});
