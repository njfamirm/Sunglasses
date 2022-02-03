// component
import './components/sunglasses-footer.ts';
import './components/sunglasses-header.ts';

// css
import '../style/index.css';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  const route = new Router(document.querySelector('main'));
  route.setRoutes([
    {
      path: '/',
      component: 'sunglasses-home-page',
      action: () => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        import('./page/sunglasses-home-page');
      },
    },
    {
      path: '/generate',
      component: 'sunglasses-generate-page',
      action: () => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        import('./page/sunglasses-generate-page');
      },
    },
  ]);
});
