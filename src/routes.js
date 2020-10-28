import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'GoBarber - Status Server: ON!' });
});

export default routes;