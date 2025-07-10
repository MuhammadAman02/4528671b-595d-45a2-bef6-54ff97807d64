import { FastifyInstance } from 'fastify';
import { getFruitsHandler } from '../controllers/fruits.controller';
import { getFruitsSchema } from '../schemas/fruits.schema';

export async function fruitsRoutes(app: FastifyInstance) {
  app.get('/fruits', {
    schema: getFruitsSchema,
    handler: getFruitsHandler,
  });
}