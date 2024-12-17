# Pre-requisite
    # docker
    # npm

# Install consul dependency in shared folder, otherwise we have to copy same module in all microservice
cd shared/consul-helper
npm install 

# Start docker container using docker-compose ( run command from root directory of project )
cd ../../   
docker-compose up --build

# Access consul at
http://localhost:8500/

# Discover User service from auth service
http://localhost:3000/discover

# docker-compose up --build --remove-orphans <optional: service-name>
# docker-compose down --volumes