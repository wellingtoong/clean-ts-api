import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
    isEmail(): boolean {
        return true
    }
}))

describe('EmailValidator Adapter', () => {
    test('Should return false if validor returns false', () => {
        const sut = new EmailValidatorAdapter()
        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
        const isValid = sut.isValid('invalid_email@mail.com')
        expect(isValid).toBe(false)
    })

    test('Should return false if validor returns true', () => {
        const sut = new EmailValidatorAdapter()
        const isValid = sut.isValid('valid_email@mail.com')
        expect(isValid).toBe(true)
    })
})