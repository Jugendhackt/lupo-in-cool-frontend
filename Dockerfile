FROM node:10-alpine

WORKDIR /app
ADD . /app

RUN npm i
RUN npx ng build --prod

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
