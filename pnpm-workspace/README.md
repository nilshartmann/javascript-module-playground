# pnpm playground

**Make sure, you have pnpm installed!**

- Install: `pnpm -r install`

- Build `pnpm -r build`

- Clean all `node_modules` and `dist` folders: `pnpm -r clean`

- run `app` from root folder: `pnpm --filter @nilshartmann/app dev`

## Publishing

- Start Verdaccio npm registry: `docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio`

- Log in `npm login --registry http://localhost:4873` (use any user and password you like)

- Run `pnpm -r publish --no-git-checks`

  - `--no-git-checks` only here in demo environment!

-
