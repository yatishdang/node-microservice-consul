microservices-consul/
├── shared/
│   └── consul-helper/
│       ├── index.js
│       ├── package.json
├── auth-service/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
├── user-service/
│   ├── index.js
│   ├── Dockerfile
├── docker-compose.yaml

mkdir -p microservices/shared/consul-helper
mkdir -p microservices/auth-service
mkdir -p microservices/user-service
mkdir -p microservices/order-service

cd microservices/shared/consul-helper
npm init -y
npm install consul

vim index.js
#Add code

cd ../../auth-service
npm init -y
npm install express body-parser
npm install ../shared/consul-helper
vim index.js
#Add code

cd ../user-service
npm init -y
npm install express body-parser
npm install ../shared/consul-helper
vim index.js
#Add code

cd ../order-service
npm install express body-parser
npm install ../shared/consul-helper
vim index.js
#Add code


