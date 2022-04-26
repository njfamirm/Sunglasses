import {
  Application,
  Context,
  Router,
  send,
  Status,
} from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import {info} from 'https://deno.land/std@0.135.0/log/mod.ts';

const router = new Router();
const app = new Application();

// serve home page
router.get('/api', async (ctx: Context) => {
  ctx.response.status = 200;
  await send(ctx, 'tweet.json', {
    root: `${Deno.cwd()}/src/`,
  });
});

// app.use(router.routes());
// app.use(router.allowedMethods());

// page not found
app.use((context) => {
  context.response.status = Status.NotFound;
  context.response.body = `404 - '${context.request.url}' not found`;
});

info('Serving on http://localhost:8000');
await app.listen({port: 8000});
