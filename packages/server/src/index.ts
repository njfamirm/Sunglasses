import {
  Application,
  Context,
  Router,
  send,
  Status,
} from 'https://deno.land/x/oak/mod.ts';
import {info} from 'https://deno.land/std/log/mod.ts';

import {checkFileExist} from './util/checkFileExist.ts';

const router = new Router();
const app = new Application();

// serve home page
router.get('/', async (ctx: Context) => {
  ctx.response.status = 200;
  await send(ctx, '/', {
    root: `${Deno.cwd()}/../client/views`,
    index: 'index.html',
  });
});

// serve home page
router.get('/api', async (ctx: Context) => {
  ctx.response.status = 200;
  await send(ctx, 'tweet.json', {
    root: `${Deno.cwd()}/src/`,
  });
});

// serve favicon.ico
router.get('/favicon.ico', async (ctx: Context) => {
  await send(ctx, '/favicon.svg', {
    root: `${Deno.cwd()}/../client/public`,
    index: 'favicon.svg',
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  if (await checkFileExist(ctx)) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/../client/`,
    });
  } else {
    next();
  }
});

// page not found
app.use((context) => {
  context.response.status = Status.NotFound;
  context.response.body = `404 - '${context.request.url}' not found`;
});

info('Serving on http://localhost:8000');
await app.listen({port: 8000});