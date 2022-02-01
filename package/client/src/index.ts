// component
import './components/tweeph-footer.ts';
import './components/tweeph-header.ts';

// css
import '../style/index.css';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  const route = new Router(document.querySelector('main'));
  route.setRoutes([
    {
      path: '/',
      component: 'tweeph-home-page',
      action: () => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        import('./page/tweeph-home-page');
      },
    },
    {
      path: '/generate',
      component: 'tweeph-generate-page',
      action: () => {
        // eslint-disable-next-line import/extensions, import/no-unresolved
        import('./page/tweeph-generate-page');
      },
    },
  ]);
});
