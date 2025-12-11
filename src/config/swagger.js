const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Auth API",
        version: "1.0.0",
        description: "Sardor Shop's backend API documentation",
      },
      servers: [
        {
          description: "Render Server",
          url: "https://sardor-s-shop-beckent-5.onrender.com",
        },
        {
          description: "Local Server",
          url: "http://localhost:8000",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./src/routes/*.js"],
  };

module.exports = swaggerOptions