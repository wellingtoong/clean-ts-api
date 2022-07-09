"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginValidation = void 0;
const validators_1 = require("../../../presentation/helpers/validators");
const email_validator_adapter_1 = require("../../../main/adapters/validators/email-validator-adapter");
const makeLoginValidation = () => {
    const validations = [];
    for (const field of ['email', 'password']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    validations.push(new validators_1.EmailValidation('email', new email_validator_adapter_1.EmailValidatorAdapter()));
    return new validators_1.ValidationComposite(validations);
};
exports.makeLoginValidation = makeLoginValidation;
