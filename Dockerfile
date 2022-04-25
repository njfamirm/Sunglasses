FROM node:current-alpine3.15

WORKDIR /app

COPY ./packages/sunglasses-web/package.json ./packages/sunglasses-web/yarn.lock ./

#RUN yarn install
ADD ./packages/sunglasses-web/node_modules/ ./node_modules

COPY ./packages/sunglasses-web/ ./

RUN yarn build:production

# better way ?!
RUN mkdir /static
RUN mv ./public /static/public
RUN mv ./index.html /static

WORKDIR /static

RUN rm -rf /app

