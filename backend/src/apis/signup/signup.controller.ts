import {Request, Response} from 'express';
import { insertProfile, Profile } from '../../utils/models/Profile'
import formData from 'form-data'
import Mailgun from 'mailgun.js'
import Client from 'mailgun.js/dist/lib/client'
import { Status } from '../../utils/interfaces/Status'
import { setActivationToken, setHash } from '../../utils/auth.utils'
export async function signupProfileController(request: Request, response: Response): Promise<Response | undefined> {
  try {
    const mailgun: Mailgun = new Mailgun(formData)
    const mailgunClient: Client = mailgun.client({ username: "api", key: <string>process.env.MAILGUN_API_KEY })

    const { profileCohort, profileEmail, profileName, profilePassword } = request.body;
    const profileHash = await setHash(profilePassword);
    const profileActivationToken = setActivationToken();
    const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}activation/${profileActivationToken}`
    console.log(profileActivationToken)

    const message = `<h2>Welcome to Capstone Voting.</h2>
<p>Please confirm your account to proceed to voting.</p>
<p><a href=""${basePath}">${basePath}</a></p>`

    const mailgunMessage = {
      from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: profileEmail,
      subject: 'One step closer to voting -- Account Activation',
      html: message
    }

    const profile: Profile = {
      profileId: null,
      profileActivationToken,
      profileCohort,
      profileEmail,
      profileHash,
      profileIsInstructor: false,
      profileName
    };
    await insertProfile(profile)

    await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

    const status: Status = {
      status: 200,
      message: 'Profile successfully created please check your email.',
      data: null
    };

    return response.json(status)

  } catch (error: any) {

    const status: Status = {
      status: 500,
      message: error.message,
      data: null
    };

    return response.json(status);
  }
}
