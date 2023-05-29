#!/bin/bash

curl -X GET "http://api.bento.michaeldemar.co/api/weather?latitude=49.267941&longitude=-123.247360&unit=C&language=en" \
    -H "Origin: http://localhost:5500/client"
