import app from '@/main/config/app'
import { noCache } from './no-cache'
import request from 'supertest'

describe('NoCache Middleware', () => {
  test('Should disable cache', async () => {
    app.get('/teste_no_cache', noCache, (req, res) => {
      res.send()
    })
    await request(app)
      .get('/teste_no_cache')
      .expect('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('Expires', '0')
      .expect('Surrogate-Control', 'no-store')
  })
})
