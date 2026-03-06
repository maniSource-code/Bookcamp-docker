# Setup Guide

## 1 Clone Repository

`git clone https://github.com/maniSource-code/Bookcamp-docker`

`cd Bookcamp-docker`

`cd app`

## 2 install npm and test node application

`npm install`

`node server.js`

`ctrl+c`

`cd ..`

## 3 Build Containers

`cd Bookcamp-docker`

`docker build -t app:1.0`

## 4 Verify image

`docker images`

## 5 Run Containers

`docker compose -f Docker-compose.yaml -p bookcamp up -d`

## 6 Verify Containers

`docker ps`
`docker images`


## 7 Access Application

NODE APP:[http://localhost:5000](http://localhost:5000)
MONGO-EXPRESS:[http://localhost:8081](http://localhost:8081)
JSON-Registrations:[http://localhost:5000/registrations](http://localhost:5000/registrations)

## 8 Close the application

`docker compose -f Docker-compose.yaml -p bookcamp down`

## 9 Run the project with one command next time

`docker compose -f Docker-compose.yaml -p bookcamp up -d`

## Important

NOte:see the [Document.pdf](Document.pdf) for more detailed setup-guide

## Useful Docker Commands to learn

Stop containers:

`docker compose down`

View logs:

`docker compose logs`

Docker Exec:

`docker exec -it container_name/container_id /bin/bash`

Restart services:

`docker compose restart`