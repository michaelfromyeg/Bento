#!/bin/bash

curl -X GET "http://127.0.0.1:3000/api/weather?latitude=49.267941&longitude=-123.247360&unit=C&language=en" \
    -H "Origin: http://localhost:5500/client"
