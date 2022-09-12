import { Status } from '../../utils/interfaces/Status'
import {Request, Response} from "express";

export function signOutController (request: Request, response: Response): Response<Status> {
  let status: Status = {status: 200, message: "sign out successful", data: null};
  const {session} = request;

  const executeSignOut = () => {
    // @ts-ignore
    session?.destroy()
  };

  const signOutFailed = () => {
    status.status = 400;
    status.message = "You are not signed in";
  };

  session ? executeSignOut() : signOutFailed();

  return response.json(status)
}