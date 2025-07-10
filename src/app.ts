import Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { fruitsRoutes } from "./routes/fruits.route";

export async function createApp() {
  const app = Fastify({
    logger: {
      level: "info",
    },
  });

  await app.register(fastifySwagger, {
    swagger: {
      info: {
        title: "Fruits API",
        description: "Simple API that returns a list of fruits",
        version: "1.0.0",
      },
    },
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: true,
    },
    staticCSP: true,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });

  app.setErrorHandler(async (error, request, reply) => {
    console.error("Global error handler:", error);

    if (error.validation) {
      return reply.status(400).send({
        error: "Validation failed",
        details: error.validation,
      });
    }

    return reply.status(500).send({
      error: "Internal Server Error",
    });
  });

  app.get("/api/health", {
    handler: async () => {
      return { status: "OK", message: "Fruits API is running" };
    },
  });

  await app.register(fruitsRoutes, { prefix: "/api" });

  return app;
}