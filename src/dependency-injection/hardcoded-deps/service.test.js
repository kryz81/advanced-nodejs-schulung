const service = require(`${__dirname}/service`);
const db = require(`${__dirname}/db`);

jest.mock(`${__dirname}/db`);

test('returns correct value', async () => {
  // given
  db.mockImplementation(() => Promise.resolve('test'));

  // when
  const result = await service('123');

  // then
  expect(result).toBe(4);
});
