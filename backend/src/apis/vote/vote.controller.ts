import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import { insertVote, Vote } from '../../utils/models/Vote'

export async function postVoteController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {voteIdeaId} = request.body

    const profile = request.session.profile as Profile
    const ideaProfileId = profile.profileId as string

    const vote: Vote = {voteIdea, voteProfileId}
    const result = await insertVote(vote)
    const status: Status ={
      status: 200,
      message: result
      return response.json
    }
      }

}