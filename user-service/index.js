const express = require('express');
const bodyParser = require('body-parser');
const ConsulHelper = require('consul-helper');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
const SERVICE_NAME = process.env.SERVICE_NAME || 'user-service';
const SERVICE_ID = process.env.SERVICE_ID || 'user-service';
const HOST_ADDRESS = process.env.HOST_ADDRESS || '192.168.1.36';

// Health Check Endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

// Service-Specific Route
app.get(`/${SERVICE_NAME}`, (req, res) => {
  res.send({ service: SERVICE_NAME, message: `Welcome to the ${SERVICE_NAME}` });
});

// Register the service with Consul
ConsulHelper.registerService( SERVICE_NAME, SERVICE_ID, PORT, HOST_ADDRESS )
  .then(() => console.log(`${SERVICE_NAME} registered successfully.`))
  .catch((err) => console.error(`Failed to register ${SERVICE_NAME}:`, err));

// Start the server
app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} is running on port ${PORT}`);
});
