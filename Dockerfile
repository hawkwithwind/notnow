FROM node:alpine

WORKDIR /usr/src/app
EXPOSE 3000

COPY app/package.json ./package.json
RUN npm install
RUN npm install sequelize-cli -g

COPY app ./
CMD [ "npm", "start" ]