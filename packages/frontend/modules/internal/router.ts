
import { RouterExtension } from '@savitri/frontend'

export const routerExtension: RouterExtension = {
  'dashboard': [
    {
      name: 'dashboard-home',
      path: 'home',
      component: () => import('./components/dashboard/c-home/c-home.vue'),
      meta: { title: 'Início' }
    },    
  ],
  'selfservice': [
    {
      name: 'selfservice-home',
      path: '/selfservice/home',
      component: () => import('./views/CSelfService'),
      meta: { title: 'Auto-atendimento'}
    }
  ]
}
