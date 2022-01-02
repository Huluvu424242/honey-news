#!/usr/bin/env bash

# server starten
npm start &

# 10 s warten
sleep 10

# playwright starten
npx playwright test

# server stoppen
kill %1

echo test beendet
# in github ci nicht notwendig, da ci selbst aufräumt
#kill 0

