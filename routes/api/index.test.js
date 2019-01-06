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

  describe('/api/health-check', () => {
    test('It should response the GET method', async () => {
      const response = await request(app).get('/api/health-check');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('/api/load', () => {
    test('It should response the GET method', async () => {
      const response = await request(app).get('/api/load');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('/api/load/1', () => {
    test('It should response the GET method', async () => {
      const response = await request(app).get('/api/load/1');
      expect(response.statusCode).toBe(200);
    });
  });
});
