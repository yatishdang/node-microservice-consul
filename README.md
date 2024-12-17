# Node.js Microservices with Consul Integration
This project demonstrates how to integrate **Consul** for service discovery in a **Node.js microservices architecture**. **Docker** and **Docker Compose** are used to containerize and orchestrate the services.

---

## **Pre-requisites**
Ensure the following are installed on your machine:

- **Docker** (for containerization)
- **npm** (Node.js package manager)

---

## **Setup Instructions**

### 1. Install Consul Dependency

To avoid duplicating dependencies across microservices, install the **Consul helper** in the shared folder.

Run the following commands:

```
cd shared/consul-helper
npm install
```

### 2. Start Docker Containers

Use **docker-compose** to build and run all the services. From the root directory of the project, execute:

```
docker-compose up --build
```

### 3. Access Consul and Services

- **Consul UI:**  
  Access the Consul dashboard at:  
  [http://localhost:8500/](http://localhost:8500/)

- **Service Discovery:**  
  Discover the **User service** from the **Auth service** at:  
  [http://localhost:3000/discover](http://localhost:3000/discover)

## **Additional Commands**

Here are some useful **docker-compose** commands:

- **Build and Start Containers (optionally for a specific service):**

  ```
  docker-compose up --build --remove-orphans <service-name>
  ```
  
- **Stop and Remove Containers with Volumes:**
  ```
  docker-compose down --volumes
  ```

## **Project Structure**

```
├── docker-compose.yaml
├── README.md
├── shared
│        └── consul-helper
│           ├── index.js
│           └── package.json
├── auth-service
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
└── user-service
    ├── Dockerfile
    ├── index.js
    └── package.json
```

## **Contributing**
Contributions are welcome! Feel free to fork this repository, raise issues, or submit a pull request.

## **License**
This project is licensed under the MIT License.
