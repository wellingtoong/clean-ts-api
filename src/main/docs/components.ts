import { apiKeySchema } from './schemas/'
import {
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeySchema
  },
  badRequest,
  notFound,
  unauthorized,
  serverError,
  forbidden
}
