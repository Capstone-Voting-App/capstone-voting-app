import {Request, Response} from 'express'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import { insertVote, selectVotesByProfileCohort, selectVotesByVoteIdeaId, Vote } from '../../utils/models/Vote'
import { selectIdeasByProfileCohort } from '../../utils/models/Idea'

export async function postVoteController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { voteIdeaId: voteIdeaId } = request.body

    // @ts-ignore
    const profile = request.session.profile as Profile
    const voteProfileId = profile.profileId as string

    const vote: Vote = { voteIdeaId, voteProfileId }
    const result = await insertVote(vote)
    const status: Status = {
      status: 200,
      message: 'Vote created successfully',
      data: null
    }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Vote recording failed.',
      data: null
    })
  }
}

export async function getVotesByProfileCohortController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {profileCohort} = request.params
    // @ts-ignore
    const data = await selectVotesByProfileCohort(profileCohort)
    console.log(data)
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

export async function getVotesByVoteIdeaIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {voteIdeaId} = request.params
    // @ts-ignore
    const data = await selectVotesByVoteIdeaId(voteIdeaId)
    console.log(data)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Could not retrieve votes',
      data: []
    })
  }
}