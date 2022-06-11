import { useApp } from '@savitri/frontend'
import { SvMain } from '@savitri/components'

import { frontend as ReferralModule } from '@savitri/plugin-referral'
import { frontend as VideoroomModule } from '@savitri/plugin-videoroom'

import InternalModule from './modules/internal'

const options = {
  i18n: {
    locale: 'pt_BR',
    messages: {
      pt_BR: require('./i18n/pt_BR/index.json')
    }
  },
  component: SvMain,
  modules: [
    ReferralModule(),
    VideoroomModule(),
    InternalModule()
  ],
  menuSchema: {
    'Início': {
      children: [
        'dashboard-pizza',
        'dashboard-ingredient',
        'dashboard-customer',
        'dashboard-beverage',
        'dashboard-order'
      ]
    },
    'Configuração': {
      children: [
        'dashboard-accessProfile',
        'dashboard-user',
      ]
    }
  }
}

useApp(options).then(({ app }) => {
  app.mount('#app')
})
