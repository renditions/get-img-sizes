#! /bin/bash
npm exec --no tsc
npm exec --no esbuild -- getSizes.ts --platform=neutral --format=cjs --outfile=getSizes.dist.js
npm exec --no esbuild -- getSizes.ts --platform=browser --format=cjs --target=es2017 --minify --outfile=getSizes.dist.min.js
