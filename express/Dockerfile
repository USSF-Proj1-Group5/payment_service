FROM node:current-alpine

RUN mkdir -p /api

WORKDIR /api

COPY . /api

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]