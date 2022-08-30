import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { postVoteController } from './vote.controller'
import { voteValidator } from './vote.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'

export const voteRoute = Router()
voteRoute.route('/')
.post(isLoggedInController, asyncValidatorController(checkSchema(voteValidator)), postVoteController)