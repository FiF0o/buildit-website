# Buildit website
- Hack to fix...
works: docker run -p 3333:9090 -itd jonlazarini/trompettini /bin/bash && npm run build && npm run serve


## Pre-requisites

- TBD

## Install
Development: `npm run dev`
Build: `npm run build`

## Notes
Some notes to be added

- Docker

exposes port :3030 from container to the client which maps http-server (:9090) for live reload
`docker run -p 3030:9090 -itd jonlazarini/buildit-website npm run serve`

spin up container
`docker run -i -t <container ID | NAME> /bin/bash`

-
Build process inspired by [how to use NPM as a build tool][post] from Keith Cirkel.

