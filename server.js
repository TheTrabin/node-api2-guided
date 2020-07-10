/** @format */

const express = require('express');
const hubsRouter = require('./hubs/hubs-router.js');

const server = express();
server.use(express.json());
server.use('/api/hubs', hubsRouter);
server.use('/something/anything', hubsRouter);

//------------------------------------------base-------------------------------------------------//
server.get('/', (req, res) => {
	res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

module.exports = server;
