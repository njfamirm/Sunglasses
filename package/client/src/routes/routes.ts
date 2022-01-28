import { Router } from '@vaadin/router';

import '../pages/deno-lit-typescript-starter-home-page.ts';

window.addEventListener('load', () => {
  const route = new Router(document.querySelector('body'));
  route.setRoutes([
    {
      path: '/',
      component: 'deno-lit-typescript-starter-home-page',
    },
  ]);
});
