import { rest } from 'msw';

// src/mocks/handlers.js

export const handlers = [
  rest.post('/loginAPI', (req, res, ctx) => {
    // Persist user's authentication in the session
    window.localStorage.setItem('items', 'test');
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
];
