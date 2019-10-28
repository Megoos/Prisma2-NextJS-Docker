FROM node:10.17.0

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN npm install

CMD [ "npm", "run", "dev" ]