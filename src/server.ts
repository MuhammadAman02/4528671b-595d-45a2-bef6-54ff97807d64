import { createApp } from "./app";
import { env } from "./config/env";

async function start() {
  try {
    const app = await createApp();
    
    await app.listen({
      port: env.PORT,
      host: env.HOST,
    });

    console.log(`🚀 Server running on http://${env.HOST}:${env.PORT}`);
    console.log(`📚 API Documentation available at http://${env.HOST}:${env.PORT}/docs`);
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

start();