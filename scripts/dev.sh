#!/usr/bin/env sh
cd "$(dirname "$0")/.." || exit 1
exec npx --yes serve -l tcp://192.168.20.140:5000 .
