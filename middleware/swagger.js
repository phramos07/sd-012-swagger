const swagger_ui = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Nossa API de Descompressão',
      version: '0.1',
      description: 'Documentação de API via Swagger'
    },
    securityDefinitions: {
      BasicAuth: 'global',
      ApiKeyAuth: {
        type: 'apiKey',
        'in': 'header',
        name: 'Authorization',
      },
    },
    basePath: '/api',
  },
  apis: ['./controller/**/*.js']
};

module.exports = (app) => {
  app.use(
    '/swagger',
    swagger_ui.serve,
    swagger_ui.setup(swaggerJSDoc(options)),
  );
}