import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { signupProfileController } from './signup.controller'
import { signupValidator } from './signup.validator'

const { checkSchema } = require('express-validator');

export const signUpRoute: Router = Router();

signUpRoute.route('/')
.post(
  asyncValidatorController(checkSchema(signupValidator)),
  signupProfileController
);

// router.route('/activation/:activation')
// .get(
//   asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
//   activationController
// )

