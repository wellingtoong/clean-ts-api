import { SignUpController } from './signup'
import { MissingParamError, ServerError } from '../../errors'
import { AccountModel, AddAccount, AddAccountModel, HttpRequest, Validation } from './singup-protocols'
import { ok, serverError, badRequest } from '../../helpers/http/http-helper'

const makeAddAccount = (): AddAccount => {
    class AddAccountStub implements AddAccount {
        async add(account: AddAccountModel): Promise<AccountModel> {
            return new Promise(resolve => resolve(makeFakeAccount()))
        }
    }
    return new AddAccountStub()
}

const makeValidation = (): Validation => {
    class makeValidationStub implements Validation {
        validate(input: any): Error {
            return null
        }
    }
    return new makeValidationStub()
}

const makeFakeAccount = (): AccountModel => ({
    id: 'valid_id',
    name: 'valid_name',
    email: 'valid_email@mail.com',
    password: 'valid_password'
})


const makeFakeRequest = (): HttpRequest => ({
    body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
    }
})

interface SutTypes {
    sut: SignUpController
    addAccountStub: AddAccount,
    validationStub: Validation
}

const makeSut = (): SutTypes => {
    const addAccountStub = makeAddAccount()
    const validationStub = makeValidation()
    const sut = new SignUpController(addAccountStub, validationStub)
    return {
        sut,
        addAccountStub, 
        validationStub
    }
}

describe('SignUp Controller', () => {
    test('Should call AddAccount with corret values', async () => {
        const { sut, addAccountStub } = makeSut()
        const addSpy = jest.spyOn(addAccountStub, 'add')
        await sut.handle(makeFakeRequest())
        expect(addSpy).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_email@mail.com',
            password: 'any_password'
        })
    })

    test('Should return 500 if AddAccount throws', async () => {
        const { sut, addAccountStub } = makeSut()
        jest.spyOn(addAccountStub, 'add').mockImplementationOnce(async () => {
            return new Promise((resolve, reject) => reject(new Error()))
        })
        const httpReponse = await sut.handle(makeFakeRequest())
        expect(httpReponse).toEqual(serverError(new ServerError(null)))
    })

    test('Should return 200 if valid data is provided', async () => {
        const { sut } = makeSut()
        const httpReponse = await sut.handle(makeFakeRequest())
        expect(httpReponse).toEqual(ok(makeFakeAccount()))
    })

    test('Should call Validation with corret values', async () => {
        const { sut, validationStub } = makeSut()
        const validateSpy = jest.spyOn(validationStub, 'validate')
        const httpRequest = makeFakeRequest()
        await sut.handle(httpRequest)
        expect(validateSpy).toHaveBeenCalledWith(httpRequest.body)
    })

    test('Should return 400 if Validation returns an error', async () => {
        const { sut, validationStub } = makeSut()
        jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
        const httpReponse = await sut.handle(makeFakeRequest())
        expect(httpReponse).toEqual(badRequest(new MissingParamError('any_field')))
    })

})