import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import { insertVote, Vote } from '../../utils/models/Vote'

export async function postVoteController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {voteIdeaId} = request.body

    // @ts-ignore
    const profile = request.session.profile as Profile
    const voteProfileId = profile.profileId as string

    const vote: Vote = {voteIdeaId, voteProfileId}
    const result = await insertVote(vote)
    const status: Status ={
      status: 200,
      message: 'Vote created successfully',
      data: null
    }
    return response.json (status)
      } catch (error) {
    return response.json({
      status: 500,
      message: 'Error creating vote',
      data: null
    })
  }
}