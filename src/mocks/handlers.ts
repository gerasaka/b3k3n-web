import { rest } from 'msw';
import books from './books.json';

export const handlers = [
  rest.get('/fee-assessment-categories', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'Happiness \u0026 Mindfulness' },
        { id: 11, name: 'Career \u0026 Business' },
        { id: 12, name: 'Productivity \u0026 Time Management' },
        { id: 19, name: 'Society \u0026 Politics' },
        { id: 21, name: 'Investment \u0026 Finance' },
      ])
    );
  }),
  rest.get('/fee-assessment-books', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(books));
  }),
];
