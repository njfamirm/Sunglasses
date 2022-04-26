FROM denoland/deno:alpine

USER deno

WORKDIR /app

COPY src/index.ts .
RUN deno cache index.ts

COPY ./src .

EXPOSE 8000

CMD ["run", "--allow-net", "--allow-read", "index.ts"]

