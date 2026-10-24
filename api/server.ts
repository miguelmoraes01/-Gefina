import express, { Request, Response } from 'express';

import invoicerouter from './invoice.route.ts';

const app = express();


app.get('/api/health', (request: Request, response: Response) => {
  response.status(200).json({ status: 'ok' });
});

app.use('/api/invoices');

app.use((request: Request, response: Response) => {
  return response.status(404).json({
    error: {
      status: 404,
      message: 'Recurso não encontrado'
    }
  });
});

app.listen(3000);