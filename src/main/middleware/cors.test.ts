import app from '@/main/config/app'
import request from 'supertest'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/teste_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/teste_cors')
      .expect('acess-control-allow-origin', '*')
      .expect('acess-control-allow-methods', '*')
      .expect('acess-control-allow-headers', '*')
  })
})
