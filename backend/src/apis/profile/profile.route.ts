import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check } from 'express-validator'
import { voteRoute } from '../vote/vote.route'
import { Router } from 'express'
import { getPartialProfilesByProfileCohortController } from './profile.controller'

export const profileRoute = Router()
profileRoute.route('/profileCohort/:profileCohort')
  .get(isLoggedInController, asyncValidatorController([check('profileCohort', 'please provide a valid cohort').isInt()]), getPartialProfilesByProfileCohortController)