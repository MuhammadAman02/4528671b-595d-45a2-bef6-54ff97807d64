import { FastifyRequest, FastifyReply } from 'fastify';
import { getFruits } from '../services/fruits.service';

export async function getFruitsHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  const fruits = await getFruits();
  res.status(200).send(fruits);
}