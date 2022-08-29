import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { deleteIdeaController, postIdeaController, selectIdeasByProfileCohortController } from './idea.controller'
import { ideaValidator } from './idea.validator'
import { selectIdeasByProfileCohort } from '../../utils/models/Idea'

export const ideaRoute = Router()
ideaRoute.route('/')
  .post(asyncValidatorController(checkSchema(ideaValidator)), postIdeaController)

ideaRoute.route('/profileCohort/:profileCohort')
  .get(asyncValidatorController([check('profileCohort', 'please provide a valid cohort')]), selectIdeasByProfileCohortController)

ideaRoute.route('/ideaId/:ideaId')
  .delete(asyncValidatorController([check('ideaId', 'please provide a valid idea ID.').isUUID()]), deleteIdeaController)

