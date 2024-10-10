const request = require('supertest');
const {app, server} = require('./index.js');

describe('Test the root path', () => {
  test('It should respond with "Hello World!"', () => {
    // const response = await request(app).get('/');
    // expect(response.text).toBe('Hello World!');
    // expect(response.statusCode).toBe(200);
    expect({ one: 1 }).toBe(1);
  });
});

// afterAll(done => {
//   // Closing the connection allows Jest to exit successfully.
//   server.close()
//   done()
// })