#!/usr/bin/env bash

npm outdated
npm outdated -p | cut -d ':' -f 5 | xargs npm install

rimraf package-lock.json
rimraf node_modules

nvm install lts
nvm use lts
node --version > ".nvmrc"

npm install
npm outdated -p | cut -d ':' -f 5 | xargs npm install


npm outdated

npm run lint
export ESLINT_USE_FLAT_CONFIG=false
node create-overrides.js
npm run lint

exit