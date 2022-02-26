FROM node:16

RUN groupadd -r pedropalma && useradd -r -g pedropalma pedropalma

# USER pedropalma

WORKDIR /home/pedropalma/cal-ts-api

COPY package*.json ./

RUN yarn install

COPY . /home/pedropalma/cal-ts-api

EXPOSE 8080

CMD ["yarn", "dev"]