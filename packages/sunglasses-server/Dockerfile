FROM denoland/deno:alpine

USER deno

WORKDIR /app

COPY src/deps.ts .
RUN deno cache deps.ts

COPY ./src .
RUN deno cache main.ts

EXPOSE 80

CMD ["run", "--allow-net", "--allow-read", "main.ts"]

