FROM node:10.17.0

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "dev" ]