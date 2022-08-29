import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { postVoteController } from './vote.controller'
import { voteValidator } from './vote.validator'

export const voteRoute = Router()
voteRoute.route('/')
.post(asyncValidatorController(checkSchema(voteValidator)), postVoteController)