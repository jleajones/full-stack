import request from 'supertest';
import express from 'express';

import ApiService from '.';

describe('/api', () => {
  const app = express();
  app.use(ApiService);

  test('It should response the GET method', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
  });
});
