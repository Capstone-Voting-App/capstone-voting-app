import { Router } from 'express';
import { signOutController } from './signout.controller';

export const SignOutRoute: Router = Router();

SignOutRoute.route("/")
  .get(signOutController);