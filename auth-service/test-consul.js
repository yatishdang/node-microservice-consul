const { registerService, discoverService } = require('consul-helper');

async function test() {
    try {
        console.log("Inside test")
        // await registerService('test-service', 'test-service-id', 3002);
        const services = await discoverService('user-service');
        console.log('Discovered services:', services);
    } catch (err) {
        console.error(err);
    }
}

test();