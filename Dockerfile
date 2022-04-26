FROM node:current-alpine3.15 AS builder

WORKDIR /app

COPY ./packages/sunglasses-web/package.json ./packages/sunglasses-web/yarn.lock ./

#RUN yarn install
ADD ./packages/sunglasses-web/node_modules/ ./node_modules

COPY ./packages/sunglasses-web/ ./

RUN yarn build:debug

FROM nginx:stable-alpine-perl

WORKDIR /static/

COPY nginx.conf /etc/nginx
# COPY --from=builder /app/index.html /usr/share/nginx/html
COPY --from=builder /app/static ./
COPY --from=builder /app/static/favicon.ico ./
COPY --from=builder /app/index.html ./



