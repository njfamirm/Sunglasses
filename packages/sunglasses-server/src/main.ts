import {Application, Context, Router, send, Status} from './deps.ts';
import {oakCors} from './deps.ts';
import {port} from './config.ts'

const router = new Router();
const app = new Application();

// serve api page
router.get('/v1', oakCors({origin: '*'}), async (ctx: Context) => {
  ctx.response.status = 200;
  await send(ctx, 'tweet.json', {
    root: `${Deno.cwd()}/`,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

// page not found
app.use((context) => {
  context.response.status = Status.NotFound;
  context.response.body = `404 - '${context.request.url}' not found`;
});

app.addEventListener('listen', ({port}) => {
  console.log(`${'Listening on port'} ${port}`);
});

await app.listen({port: port});
