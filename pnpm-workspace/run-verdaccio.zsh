#! /bin/zsh

V_PATH=${0:a:h}/.verdaccio

mkdir -p $V_PATH

docker run -it --rm --name verdaccio \
  -p 4873:4873 \
  -v $V_PATH/storage:/verdaccio/storage \
  verdaccio/verdaccio