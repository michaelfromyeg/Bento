#!/bin/bash

curl -X GET "http://127.0.0.1:3000/.well-known/acme-challenge/P7EIC8dzT_ff6L5PDGPaRLPO3pJidpZKZcV0RwmTLu4" \
    -H "Origin: http://localhost:5500/client"
