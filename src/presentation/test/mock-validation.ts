import { Validation } from '@/presentation/protocols'

export const mockValidation = (): Validation => {
  class makeValidationStub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new makeValidationStub()
}
