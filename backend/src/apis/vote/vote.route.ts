import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import {
  getVotesByProfileCohortController,
  getVotesByVoteIdeaIdController,
  postVoteController
} from './vote.controller'
import { voteValidator } from './vote.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'


export const voteRoute = Router()
voteRoute.route('/')
.post(isLoggedInController, asyncValidatorController(checkSchema(voteValidator)), postVoteController)

voteRoute.route('/profileCohort/:profileCohort')
  .get(isLoggedInController, asyncValidatorController([check('profileCohort', 'please provide a valid cohort').isInt()]), getVotesByProfileCohortController)

voteRoute.route('/:voteIdeaId')
  .get(asyncValidatorController([check('voteIdeaId', 'please provide a valid vote').isUUID()]), getVotesByVoteIdeaIdController)