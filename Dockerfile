# Build ruby & node layers
FROM phusion/passenger-customizable

ENV HOME /root

RUN /pd_build/ruby-2.3.1.sh
RUN /pd_build/nodejs.sh

# Globally install compass as compass sh can't be found when running the container and launching build task
# compass gem has been removed
RUN apt-get install -y ruby-compass

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Define env variables and paths (workspace) to process files when deploying container(s)
ENV WORKSPACE /var/www/web
WORKDIR $WORKSPACE

# Ruby dependencies layer
ADD Gemfile $WORKSPACE/Gemfile
ADD Gemfile.lock $WORKSPACE/Gemfile.lock
RUN cd $WORKSPACE && bundle install

# Npm dependencies layer
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p $WORKSPACE && cp -a /tmp/node_modules $WORKSPACE/

# Path added to the image
ADD . $WORKSPACE

# CMD npm run build
ENTRYPOINT npm run build
# RUN ["/bin/bash", "-c", "npm run build"]