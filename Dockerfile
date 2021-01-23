FROM ruby:3.0

RUN apt-get update && apt-get install -y \
  curl \
  build-essential \
  libpq-dev &&\
  curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
apt-get update && apt-get install -y nodejs yarn

COPY Gemfile* /app/
COPY package.json yarn.lock /app/
WORKDIR /app

ENV GEM_HOME="/usr/local/bundle"
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH
ENV PATH /usr/local/node_modules/.bin:$PATH

RUN set -uex; \
    gem install bundler:2.1.4; \
    bundle install; \
    yarn install;

COPY . /app/

EXPOSE 4000
EXPOSE 3001

CMD ["yarn", "run", "dev"]
