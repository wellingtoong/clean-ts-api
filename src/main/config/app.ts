import setupMiddleware from './middlewares'
import setupRoutes from './routes'
import setupStaticFiles from '././static-files'
import setupSwagger from './config-swagger'
import express from 'express'

const app = express()
setupStaticFiles(app)
setupSwagger(app)
setupMiddleware(app)
setupRoutes(app)
export default app
