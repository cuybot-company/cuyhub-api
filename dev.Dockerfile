FROM node:current-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install

CMD ["npm", "start"]
