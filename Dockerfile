FROM node:latest

RUN mkdir ordersApp
COPY . /ordersApp/

WORKDIR /ordersApp/Server
RUN npm install 


WORKDIR /ordersApp/Client
RUN npm install 


ENTRYPOINT [ "npm", "start"]