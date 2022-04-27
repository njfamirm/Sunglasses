FROM node:current-alpine3.15 AS builder

WORKDIR /app

COPY ./package.json ./yarn.lock ./

# RUN yarn install --production
ADD ./node_modules/ ./node_modules

COPY . .

RUN yarn build:production

FROM nginx:stable-alpine-perl

WORKDIR /static/

COPY nginx.conf /etc/nginx
COPY --from=builder /app/static /app/index.html /app/static/favicon.ico ./
