FROM denoland/deno:alpine

USER deno

WORKDIR /app

COPY src/deps.ts .
RUN deno cache deps.ts

COPY ./src .
COPY ./tweet.json .
RUN deno cache main.ts

EXPOSE 80

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "main.ts"]

