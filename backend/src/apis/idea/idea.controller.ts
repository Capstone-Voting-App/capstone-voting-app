// export async function getAllIdeasController (request: Request, response: Response): Promise<Response<Status>> {
//   try {
//     const data = await selectAllIdeas()
//   }
// }

import { Status } from '../../utils/interfaces/Status'
import { Idea, insertIdea } from '../../utils/models/Idea'
import { Profile } from '../../utils/models/Profile'
import { Request, Response } from 'express'

export async function postIdeaController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { ideaArchived, ideaDescription } = request.body
    // @ts-ignore
    const profile = request.session.profile as Profile
    const ideaProfileId = profile.profileId as string
    const idea: Idea = { ideaId: null, ideaProfileId, ideaArchived, ideaDescription }
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