import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { postIdeaController } from './idea.controller'

export const ideaRoute = Router()
ideaRoute.route('/')
.post(asyncValidatorController(checkSchema(ideaValidator)), postIdeaController)