FROM node

RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

COPY . /app
RUN yarn install
RUN npm run build
RUN mv ./dist/* ./

EXPOSE 3000
