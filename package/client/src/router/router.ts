import {Router} from '@vaadin/router';

window.addEventListener('load', () => {
  const route = new Router(document.querySelector('main'));
  route.setRoutes([
    {
      path: '/',
      component: 'sunglasses-home-page',
      action: async (): Promise<void> => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        await import('../page/sunglasses-home-page');
      },
    },
    {
      path: '/editor',
      component: 'sunglasses-editor-page',
      action: async (): Promise<void> => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        await import('../page/sunglasses-editor-page');
      },
    },
    {
      path: '/generate',
      component: 'sunglasses-generate-page',
      action: async (): Promise<void> => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        await import('../page/sunglasses-generate-page');
      },
    },
  ]);
});
