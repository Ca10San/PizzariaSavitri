import { init } from '@savitri/backend'

import { backend as ReferralModule } from '@savitri/plugin-referral'
import { backend as VideoroomModule } from '@savitri/plugin-videoroom'

import { testHandler } from "./api/testHandler"

const config = {
  modules: [
    ReferralModule(),
    VideoroomModule(),
  ]
}

init(config)
  .then(server => {
    server.route({
      method: "GET",
      path: "/api/test",
      handler: testHandler
    }),

    server.start()
  })
