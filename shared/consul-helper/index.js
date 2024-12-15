const Consul = require('consul');

// Create Consul client instance
const consul = new Consul({
  host: process.env.CONSUL_HOST || 'localhost',
  port: process.env.CONSUL_PORT || 8500,
});

// Function to register a service
function registerService(serviceName, serviceId, port, address = 'localhost') {
  return new Promise((resolve, reject) => {
    consul.agent.service.register(
        {
          id: serviceId,
          name: serviceName,
          address: address,
          port: parseInt(port, 10), // Ensure port is an integer,
          check: {
            http: `http://${address}:${port}/health`,
            interval: '10s',
          },
        },
        (err) => {
          if (err) {
            reject(err);
          } else {
            console.log(`Service ${serviceName} registered successfully.`);
            resolve();
          }
        }
    );
  });
}

// Function to deregister a service
function deregisterService(serviceId) {
  return new Promise((resolve, reject) => {
    consul.agent.service.deregister(serviceId, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Service ${serviceId} deregistered successfully.`);
        resolve();
      }
    });
  });
}

// Function to discover services
async function discoverService(serviceName) {
  try {
    const services = await consul.health.service({
      service: serviceName,
      passing: true, // Only return services that pass health checks
    });
    const instances = services.map((entry) => ({
      ID: entry.Service.ID,
      Address: entry.Service.Address,
      Port: entry.Service.Port,
    }));
    return instances;
  } catch (error) {
    console.error(`Error discovering service ${serviceName}:`, error.message);
    throw error;
  }
}

module.exports = {
  registerService,
  deregisterService,
  discoverService,
};