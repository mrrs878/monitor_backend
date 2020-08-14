FROM node

RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

COPY . /app
RUN yarn install
RUN build build
RUN mv ./dist/* ./

EXPOSE 3000

CMD BUILD_ENV=docker node app.js
