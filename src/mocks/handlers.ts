import { rest } from 'msw';

export const handlers = [
  rest.get('/fee-assessment-categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Happiness \u0026 Mindfulness' },
        { id: 11, name: 'Career \u0026 Business' },
      ])
    );
  }),
];
