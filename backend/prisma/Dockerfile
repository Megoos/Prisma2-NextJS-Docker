FROM node:10.17.0
RUN npm install -g --unsafe-perm prisma2

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

CMD [ "prisma2", "dev"]