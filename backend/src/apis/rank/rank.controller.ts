import {Request, Response} from 'express'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import { insertRank, Rank } from '../../utils/models/Rank'
import { deleteIdea } from '../../utils/models/Idea'

export async function postRankController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { rankIdeaId, rankValue } = request.body

    // @ts-ignore
    const profile = request.session.profile as Profile
    const rankProfileId = profile.profileId as string

    const rank: Rank = { rankIdeaId, rankProfileId, rankValue }
    const result = await insertRank(rank)
    const status: Status = {
      status: 200,
      message: 'Ranking recorded successfully',
      data: null
    }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Ranking error. Please try again',
      data: null
    })
  }
}

export async function deleteRankController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {ideaId} = request.params
    const data = await deleteIdea(ideaId)
    // return the response
    const status: Status = { status: 200, message: 'Ranking deleted successfully', data: null }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Ranking does not exist',
      data: null
    })
  }
}