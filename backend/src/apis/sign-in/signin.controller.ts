import {Request, Response} from "express";
import {Profile, selectProfileByProfileEmail} from "../../utils/models/Profile";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {v4 as uuid} from 'uuid'
import session from 'express-session';


export async function signInController (request: Request, response: Response) : Promise<Response> {
    try {
        const { profileEmail, profilePassword } = request.body
        const profile = await selectProfileByProfileEmail(profileEmail)
        return (profile !== null) && await validatePassword(profile.profileHash, profilePassword)
        ? signInSuccessful(request, response, profile)
            :signInFailed(response)
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message})
    }
}


/**
 * helper function that attaches a failure message, related to signing in, to the server response.
 * @param response an object modeling the response that will be sent to the client.
 * @return express response object with the client status object set in json
 **/
function signInFailed (response: Response): Response {
    return response.json({ status: 400, message: 'Email or password is incorrect please try again.', data: null})
}
/**
 * helper function that creates a jwt token, sets it to the authorization header in the response  and attaches a success message, related to signing in, to the response.
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @param profile Profile object of the person who just logged in
 * @return express response object with the client status object set in json and an authorization header
 **/
function signInSuccessful (request: Request, response: Response, profile: Profile): Response {
    const {profileId, profileEmail, profileName, profileCohort,profileIsInstructor} = profile
    const signature: string = uuid()
    const authorization: string = generateJwt({
        profileId,
        profileEmail,
        profileName,
        profileCohort,
        profileIsInstructor
    }, signature)
    // @ts-ignore
    request.session.profile = profile
    // @ts-ignore
    request.session.jwt = authorization
    // @ts-ignore
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({status: 200, message: 'Sign in successful', data: null})
}