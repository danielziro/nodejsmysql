FROM node:20.11.0

WORKDIR /api
COPY package.json .
RUN npm install

COPY . .
CMD npm start