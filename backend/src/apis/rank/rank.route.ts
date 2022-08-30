import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { postRankController } from './rank.controller'
import { rankValidator } from './rank.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'

export const rankRoute = Router()
rankRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(rankValidator)), postRankController)