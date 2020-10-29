import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => response.json({ message: 'GoBarber - Status Server: ON!' }));

export default routes;
