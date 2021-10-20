FROM node:current-alpine

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .
RUN npm i -g pm2

CMD ["pm2-runtime", "src/index.js"]
