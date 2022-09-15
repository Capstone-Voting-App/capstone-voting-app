// export async function getAllIdeasController (request: Request, response: Response): Promise<Response<Status>> {
//   try {
//     const data = await selectAllIdeas()
//   }
// }

import { Status } from '../../utils/interfaces/Status'
import { deleteIdea, Idea, insertIdea, selectIdeasByProfileCohort } from '../../utils/models/Idea'
import { Profile } from '../../utils/models/Profile'
import { Request, Response } from 'express'

export async function postIdeaController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { ideaDescription } = request.body
    // @ts-ignore
    const profile = request.session.profile as Profile
    const ideaProfileId = profile.profileId as string
    const idea: Idea = { ideaId: null, ideaProfileId, ideaArchived: false, ideaDescription }
    const result = await insertIdea(idea)
    const status: Status = {
      status: 200,
      message: result,
      data: null
    }
    return response.json(status)
  }catch (error) {
    return response.json({
      status: 500,
      message: 'Error posting idea. Try again later',
      data: null
    })
  }
}

export async function getIdeasByProfileCohortController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {profileCohort} = request.params
    const data = await selectIdeasByProfileCohort(Number(profileCohort))
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Could not retrieve data',
      data: []
    })
  }
}

export async function deleteIdeaController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {ideaId} = request.params
    const data = await deleteIdea(ideaId)
    // return the response
    const status: Status = { status: 200, message: 'Idea deleted successfully', data: null }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Idea does not exist',
      data: null
    })
  }
}
