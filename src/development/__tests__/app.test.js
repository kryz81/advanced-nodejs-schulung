const request = require('supertest');

const app = require(`${__dirname}/../app`);

test('returns all users', async () => {
  const { body: res } = await request(app)
    .get('/users')
    .expect(200);

  expect(res).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": "1",
        "name": "User 1",
        "role": "Software Engineer",
      },
      Object {
        "id": "2",
        "name": "User 2",
        "role": "Software Architect",
      },
      Object {
        "id": "3",
        "name": "User 3",
        "role": "Scrum Master",
      },
    ]
  `);
});

test('returns existing user', async () => {
  const { body: res } = await request(app)
    .get('/users/2')
    .expect(200);

  expect(res).toEqual({
    id: '2',
    name: 'User 2',
    role: 'Software Architect',
  });
});

test('returns 404 when no user found', async () => {
  const { body: res } = await request(app)
    .get('/users/non-existing-id')
    .expect(404);

  expect(res).toEqual({ msg: 'Not found' });
});
