FROM node:18

# this WORKDIR /app creates & changes directory to app directory in container
WORKDIR /app   

#copies Bookcamp-docker/app json files to /app dir in container
COPY app/package*.json ./

#installs node package manager using package.json file 
RUN npm install

#copies all files inside Bookcamp-docker/app dir to /app dir in container
COPY app .

#exposes port 5000
EXPOSE 5000

#runs the node-server
CMD ["node", "server.js"]