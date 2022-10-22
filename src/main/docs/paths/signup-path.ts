export const signUpPath = {
  post: {
    tags: ['Login'],
    summary: 'API to create user account',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/singUpParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
