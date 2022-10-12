import app from '@/main/config/app'
import request from 'supertest'

describe('Body Parser Middleware', () => {
  test('Should parser body as json', async () => {
    app.post('/teste_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/teste_body_parser')
      .send({ name: 'Wellington' })
      .expect({ name: 'Wellington' })
  })
})
