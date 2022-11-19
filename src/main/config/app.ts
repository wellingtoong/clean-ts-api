import setupMiddlewares from '@/main/config/middlewares'
import setupRoutes from '@/main/config/routes'
import setupStaticFiles from '@/main/config/static-files'
import setupSwagger from '@/main/config/swagger'
import setupApolloServer from './apollo-server'

import express, { Express } from 'express'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupApolloServer(app)
  setupStaticFiles(app)
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
