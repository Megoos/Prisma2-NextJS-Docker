FROM node:10.17.0
RUN npm install -g --unsafe-perm prisma2

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN prisma2 generate

CMD [ "npm", "start" ]