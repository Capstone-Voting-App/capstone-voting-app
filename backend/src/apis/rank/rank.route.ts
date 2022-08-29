import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { postRankController } from './rank.controller'
import { rankValidator } from './rank.validator'

export const rankRoute = Router()
rankRoute.route('/')
  .post(asyncValidatorController(checkSchema(rankValidator)), postRankController)