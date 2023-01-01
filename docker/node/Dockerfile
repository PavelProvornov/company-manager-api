# Base image
FROM node:18-alpine

EXPOSE 5000

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "run", "start:dev" ]
