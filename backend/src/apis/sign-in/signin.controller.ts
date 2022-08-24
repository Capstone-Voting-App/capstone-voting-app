import { Request, Response } from 'express'
import { generateJwt, validatePassword } from '../../utils/auth.utils'
import { v4 as uuid } from 'uuid'
import { Profile } from '../../utils/models/Profile'

export async function signInController (request: Request, response: Response):Promise<Response> {
  try {
    const {profileEmail, profilePassword } = request.body
    const profile = await selectProfileByProfileEmail(profileEmail)

    return (profile !== null) && await validatePassword(profile.profileHash, profilePassword)
    ? signInSuccessful(request, response, profile)
    : signInFailed(response)
  } catch (error:any) {
    return response.json({status: 500, dats: null, message: error.message})
  }
}

function signInFailed (response: Response): Response {
  return response.json({status: 400, message: 'Email or password is incorrect. Please try again.', data: null})
}

function signInSuccessful(request: Request, response: Response, profile: Profile): Response {
  const { profileId, profileName, profileEmail } = profile
  const signature: string = uuid()
  const authorization: string = generateJwt({
    profileId,
    profileName,
    profileEmail
  }, signature)

  request.session.profile = profile
  request.session.jwt = authorization
  request.session.signature = signature

  response.header({
    authorization
  })
  return response.json({ status: 200, message: 'Sign in successful', data: null })
}