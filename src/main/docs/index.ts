import { loginPath } from './paths'
import { loginParamsSchema, errorSchema, accountSchema } from './schemas'
import { badRequest, unauthorized, serverError, notFound } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Course API to conduct polls between programmers',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    notFound,
    unauthorized,
    serverError
  }
}
