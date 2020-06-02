import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes; 

//Rota: Endereço completo da requisição.
//Recurso: Qual entidade estamos acessando do sistema.

//GET: Buscar uma ou mais informações do beckend;
//POST: Criar uma nova informação no backend;
//PUT: Atualizar uma informação existente do backend;
//DELETE: Deletar/remover uma informação do backend;

//Request Param: parâmetros que vem na própria rota que identificam um recurso.
//Query Param: parâmetros que vem na própria rota, geralmente opcionais, servem para filtrar, fazer paginação...
//Request body: parâmetros para criação e atualização de informações.