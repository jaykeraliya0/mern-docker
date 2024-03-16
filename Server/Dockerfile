FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV TOKENKEY=co1YWvCSe2in/q1sYRllcisT7ZrEHQfhc6YUEE4WSFw=

EXPOSE 5000

CMD ["npm", "start"]