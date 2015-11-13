#!/bin/bash
browserify public/app.js > public/bundle.js
echo "bundled! run with: nodejs server.js"