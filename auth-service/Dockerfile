# Stage 1: Copy consul-helper
FROM node:18 as consul-helper

WORKDIR /consul-helper
COPY ./shared/consul-helper /consul-helper
RUN npm install

# Stage 2: Build the auth-service
FROM node:18

WORKDIR /usr/src/app

# Copy the consul-helper from the previous stage
COPY --from=consul-helper /consul-helper ./node_modules/consul-helper

# Copy package.json and install dependencies
COPY ./auth-service/package.json .
RUN npm install

# Copy the rest of the application code
COPY ./auth-service .

EXPOSE 3000

CMD ["node", "index.js"]