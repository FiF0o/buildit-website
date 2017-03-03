# Buildit website
Static website using npm scripts (cli version) to build assets.</br>
pug/jade, semantic-ui are used as front-end.</br>
A docker container will be provided for local development.

<<<<<<< HEAD
...Live server runs on port 9090...

# Build
`run docker run -p 9090:<YOUR_PORT> -it jonlazarini/bldt-website`


# Dev
 `docker run -p <YOUR_PORT>:9090 -it jonlazarini/bldt-website /bin/bash npm run serve`
 `git checkout prod` for the most recent version


## npm scripts
see package json
`npm run dev`
`npm run build`

## Notes
Some notes to be added
=======
## Pre-requisites
`assets` dir contains your source code.</br>
`assets/scripts/main.js` is the entrypoint</br></br>
Static files will be served from `dist` dir.</br>

- nvm/ruby installed on your OS.
- install npm dependencies.
- `npm run ruby:config` to install the `gem bundler`.
- install gems from your `Gemfile` for scss (sass) with the bundler, `npm run install:gems` - gem dependencies will be available in your `Gemfile.lock` when deploying.
- expose a `token.js` file at the root with a `google` key containing your google-map api key.

## Install and using the project locally (without Docker)
Development: `npm run dev`, opens on port `:9090` and live-reload on port 9091.</br>
Build: `npm run build`.<br>


## Docker
<br>`jonlazarini/buildit-website` docker image is available on Dockerhub.</br></br>

### running the container
exposes port :3030 from container to the client which maps http-server (:9090) for live reload<br>
`docker run -p 3030:9090 -itd jonlazarini/buildit-website npm run serve`

### spinning up a container
`docker run -i -t <container ID | NAME> /bin/bash`
>>>>>>> 4a321f05600f1669e41a5538982ff01e92ce4ab5


## Improvements
- Refactor npm scripts to make them more readable
- Refactor scripts for CI/CD: prepush linting, code-coverage/test when deploying
- CI/CD integration
- Tasks for deploying
- Optimisations (images, builds)

#### Other
`npm run sass-convert` can be used if you wish to convert scss files from `scss` to `sass`.</br></br></br>
**<br>
**Build process inspired by [how to use NPM as a build tool][post] from Keith Cirkel.**</br>
**
