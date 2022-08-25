import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { signupProfileController } from './signup.controller'
import { signupValidator } from './signup.validator'
import { activationController } from './activation.controller'
import { param } from 'express-validator'

const { checkSchema } = require('express-validator')

export const signupRoute: Router = Router();

signupRoute.route('/')
  .post(
    asyncValidatorController(checkSchema(signupValidator)),
    signupProfileController
  );

signupRoute.route('/activation/:activation')
  .get(
    asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
    activationController
  )
