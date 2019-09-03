const usersService = require(`${__dirname}/../users`);

jest.mock(`${__dirname}/../../models/user`, () => ({
  create: data => Promise.resolve(data),
}));

jest.mock('uuid', () => ({
  v4: () => 'test-id',
}));

const user = {
  name: 'Test User',
  role: 'Test Role',
};

test('creates user', async () => {
  // when
  const result = await usersService.createUser(user);

  // then
  expect(result).toEqual({ ...user, id: 'test-id' });
});
