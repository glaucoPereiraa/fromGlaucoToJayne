FROM node:24-alpine

COPY . /home/node/app

WORKDIR /home/node/app

RUN npm install