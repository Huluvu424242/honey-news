#!/usr/bin/env bash

# export TEST_URL="http://localhost:3333"

# server starten
npm start &

# 10 s warten
sleep 10

# playwright starten
npx playwright test

# server stoppen
kill %1

# nur weil node process durch npm als fork weiterlebt
kill 0

