const request = require('supertest');
const app = require('../app');

test('returns correct status and response', async () => {
  const { text: res } = await request(app)
    .get('/calculate')
    .expect(200);

  expect(res).toBe('[calculate]\n');
});
