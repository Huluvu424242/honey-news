#!/usr/bin/env bash

# server starten
npm start &

# 10 s warten
sleep 10

# playwright starten
npx playwright test

# server stoppen
kill %1

# nur in win bash weil node process als fork weiterlebt
kill 0

