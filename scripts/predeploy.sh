#!/bin/sh
set -eu
pnpm check
node --test scripts/production-config.test.mjs
pnpm build
