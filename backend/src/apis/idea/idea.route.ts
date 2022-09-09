import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { deleteIdeaController, postIdeaController, getIdeasByProfileCohortController } from './idea.controller'
import { ideaValidator } from './idea.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'

export const ideaRoute = Router()
ideaRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(ideaValidator)), postIdeaController)

ideaRoute.route('/profileCohort/:profileCohort')
  .get(isLoggedInController, asyncValidatorController([check('profileCohort', 'please provide a valid cohort').isInt()]), getIdeasByProfileCohortController)

ideaRoute.route('/ideaId/:ideaId')
  .delete(isLoggedInController, asyncValidatorController([check('ideaId', 'please provide a valid idea ID.').isUUID()]), deleteIdeaController)

