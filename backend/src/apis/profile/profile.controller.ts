import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { selectPartialProfilesByProfileCohort } from '../../utils/models/Profile'

export async function getPartialProfilesByProfileCohortController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {profileCohort} = request.params
    // @ts-ignore
    const data = await selectPartialProfilesByProfileCohort(profileCohort)
    console.log(data)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Profile does not exist',
      data: []
    })
  }
}