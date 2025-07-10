import { envsafe, str, port } from 'envsafe';
import dotenv from 'dotenv';

dotenv.config();

export const env = envsafe({
  PORT: port({
    default: 3000,
    desc: 'Port to run the server on',
  }),
  HOST: str({
    default: '0.0.0.0',
    desc: 'Host to run the server on',
  }),
});