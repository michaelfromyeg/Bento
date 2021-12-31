#!/bin/bash

# Copy files to dist/ for deployment.

# Usage: `bash build.sh`

mkdir -p dist

echo "https://bento.michaeldemar.co" > dist/CNAME

cp -r assets dist
cp app.css dist
cp index.html dist
