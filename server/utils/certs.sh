#!/bin/bash

# The final command to add SSL to Heroku deployment. Doesn't work on free tier.
# See: https://medium.com/@bantic/free-tls-with-letsencrypt-and-heroku-in-5-minutes-807361cca5d3

# Usage: `bash certs.sh`

sudo -E env "PATH=$PATH" heroku certs:add /etc/letsencrypt/live/api.bento.michaeldemar.co/fullchain.pem /etc/letsencrypt/live/api.bento.michaeldemar.co/privkey.pem

