const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Agence Immo',
        version: '1.0.0',
        description: 'API de Agence Immo',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],

}
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec; 