import paths from './paths'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Course API to conduct polls between programmers',
    version: '1.0.0',
    contact: {
      name: 'Wellington Gonzalez',
      email: 'wellington.gonzalez@hotmail.com',
      url: 'https://www.linkedin.com/in/wellingtoong/'
    }
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  },
  {
    name: 'Survey'
  }
  ],
  paths,
  schemas,
  components
}
