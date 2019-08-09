FROM node:12-alpine

WORKDIR /app

RUN npm i -g yarn jest

COPY package.json ./
RUN yarn

COPY . .

CMD ["yarn", "debug"]
