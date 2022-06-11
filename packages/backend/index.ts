import { init } from '@savitri/backend'

import { backend as ReferralModule } from '@savitri/plugin-referral'
import { backend as VideoroomModule } from '@savitri/plugin-videoroom'

const config = {
  modules: [
    ReferralModule(),
    VideoroomModule(),
  ]
}

init(config)
    .then(server => server.start())
