#!/usr/bin/env bash

# server starten
#npm ./node_modules/@stencil/core/bin/stencil build --server --ci &
npm start &

# 10 s warten
sleep 10

# playwright starten
npx playwright test

# server stoppen
kill %1
exit 0

