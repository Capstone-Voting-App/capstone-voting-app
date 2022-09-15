import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {check, checkSchema} from 'express-validator'
import {getRanksByProfileCohortController, postRankController} from './rank.controller'
import { rankValidator } from './rank.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import {getIdeasByProfileCohortController} from "../idea/idea.controller";
import {ideaRoute} from "../idea/idea.route";

export const rankRoute = Router()
rankRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(rankValidator)), postRankController)
rankRoute.route('/profileCohort/:profileCohort')
    .get(isLoggedInController, asyncValidatorController([check('profileCohort', 'please provide a valid cohort').isInt()]), getRanksByProfileCohortController)