#!/bin/bash

echo "pulling image..."
docker pull mrrs878/monitor_backend:latest

echo "restarting ap..."
docker-compose up -d

echo "awesome, you succeeded!"
