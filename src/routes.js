const routes = require('express').Router();

routes.get('/', (req, res) => res.send('GeoQuiz API'));

module.exports = routes;