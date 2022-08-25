import { Router} from 'express'
import exp from "constants";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {checkSchema} from "express-validator";
import {signInController} from "./signin.controller";
import {signInValidator} from "./signin.validator";

export const signInRoute:Router = Router()

signInRoute.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController)

