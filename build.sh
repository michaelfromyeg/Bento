#!/bin/bash

# Copy files to dist/ for deployment.

# Usage: `bash build.sh`

mkdir -p dist
cp -r assets dist
cp app.css dist
cp index.html dist
