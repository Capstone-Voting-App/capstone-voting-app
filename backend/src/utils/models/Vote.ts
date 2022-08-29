import { sql } from '../database.utils'

export interface Vote{
  voteIdeaId: string | null,
  voteProfileId: string | null
}

export async function insertVote(vote: Vote): Promise<string> {
  const {voteIdeaId, voteProfileId} = vote
  await sql `INSERT INTO vote ("voteIdeaId", "voteProfileId") VALUES (${voteIdeaId}, ${voteProfileId})`
  return 'vote successfully created'
}

export async function selectVoteByVoteIdeaId (ideaId: string): Promise<Vote[]> {
  return sql<Vote[]> `SELECT "voteIdeaId", "voteProfileId" FROM vote WHERE "voteIdeaId"=${ideaId}`
}

export async function selectVoteByVoteProfileId (profileId: string): Promise<Vote[]> {
  return sql<Vote[]> `SELECT "voteIdeaId", "voteProfileId" FROM vote WHERE "voteProfileId"=${profileId}`
}