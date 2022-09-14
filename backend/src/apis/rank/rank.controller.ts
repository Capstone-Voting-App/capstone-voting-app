import {Request, Response} from 'express'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import {insertRank, Rank, selectRanksByProfileCohort} from '../../utils/models/Rank'
import {deleteIdea, selectIdeasByProfileCohort} from '../../utils/models/Idea'

export async function postRankController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { ranks, ideasLength } = request.body

    // @ts-ignore
    const profile = request.session.profile as Profile
    const rankProfileId = profile.profileId as string

    const result = await insertRank(ranks as Rank[], ideasLength)
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
export async function getRanksByProfileCohortController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {profileCohort} = request.params
    const data = await selectRanksByProfileCohort(Number(profileCohort))
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Could not retrieve Ranks',
      data: []
    })
  }
}