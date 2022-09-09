import { sql } from '../database.utils'
import { Idea } from './Idea'

export interface Vote{
  voteIdeaId: string | null,
  voteProfileId: string | null
}

export async function insertVote(vote: Vote): Promise<string> {
  const {voteIdeaId, voteProfileId} = vote
  await sql `INSERT INTO vote ("voteIdeaId", "voteProfileId") VALUES (${voteIdeaId}, ${voteProfileId})`
  return 'vote successfully created'
}
// We may or may not need these
// export async function selectVoteByVoteIdeaId (ideaId: string): Promise<Vote[]> {
//   return sql<Vote[]> `SELECT "voteIdeaId", "voteProfileId" FROM vote WHERE "voteIdeaId"=${ideaId}`
// }
//
// export async function selectVoteByVoteProfileId (profileId: string): Promise<Vote[]> {
//   return sql<Vote[]> `SELECT "voteIdeaId", "voteProfileId" FROM vote WHERE "voteProfileId"=${profileId}`
// }

export async function selectVotesByProfileCohort (profileCohort: number): Promise<Vote[] | null> {
  const data: Vote[] = await sql `SELECT "voteIdeaId", "voteProfileId" FROM vote JOIN profile ON vote."voteProfileId" = profile."profileId" WHERE profile."profileCohort" = ${profileCohort}`
  return data
}