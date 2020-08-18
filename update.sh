#!/bin/bash

echo "pulling image..."
docker pull docker pull registry.cn-shanghai.aliyuncs.com/mrrs878/monitor_backend:latest

echo "restarting ap..."
docker-compose up -d

echo "awesome, you succeeded!"
