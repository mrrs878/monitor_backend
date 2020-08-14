FROM node

RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

RUN rm -rf /node_modules
COPY . /app
RUN yarn install
RUN yarn build
RUN mv ./dist/* ./

EXPOSE 3000

CMD [ "node", "main" ]
