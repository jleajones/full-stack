import request from 'supertest';
import express from 'express';

import AuthService from '.';

describe('/auth', () => {
  const app = express();
  app.use(AuthService);

  test('It should response the GET method', async () => {
    const response = await request(app).get('/auth');
    expect(response.statusCode).toBe(200);
  });
});
