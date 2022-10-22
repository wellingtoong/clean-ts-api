import { loginPath, surveyPath, signUpPath } from './paths'
import { loginParamsSchema, errorSchema, accountSchema, surveySchema, surveysSchema, surveyAnswerSchema, apiKeySchema, signUpParamsSchema, addSurveyParamsSchema } from './schemas'
import { badRequest, unauthorized, serverError, notFound, forbidden } from './components'

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
  tags: [
    {
      name: 'Login'
    },
    {
      name: 'Survey'
    }
  ],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    singUpParams: signUpParamsSchema,
    addSurveyParams: addSurveyParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeySchema
    },
    badRequest,
    notFound,
    unauthorized,
    serverError,
    forbidden
  }
}
