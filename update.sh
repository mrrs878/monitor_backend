#!/bin/bash

echo "updating code..."
git pull

echo "installing packages..."
yarn install

echo "building image..."
docker build -t registry.cn-shanghai.aliyuncs.com/mrrs878/monitor_backend:latest .

echo "stoping app..."
docker-compose down

echo "restarting app..."
docker-compose up -d

echo "hooray, succeeded!"
