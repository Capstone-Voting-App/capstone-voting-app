import { sql } from '../database.utils'

export interface Rank{
  rankIdeaId: string | null,
  rankProfileId: string | null
  rankValue: number
}

export async function insertRank(rank: Rank): Promise<string> {
  const {rankIdeaId, rankProfileId, rankValue} = rank
  await sql `INSERT INTO rank ("rankIdeaId", "rankProfileId", "rankValue") VALUES (${rankIdeaId}, ${rankProfileId}, ${rankValue})`
  return 'rank successfully created'
}

export async function selectRankByRankIdeaId (ideaId: string): Promise<Rank[]> {
  return sql<Rank[]> `SELECT "rankIdeaId", "rankProfileId", "rankValue" FROM rank WHERE "rankIdeaId"=${ideaId}`
}

export async function selectRankByRankProfileId (profileId: string): Promise<Rank[]> {
  return sql<Rank[]> `SELECT "rankIdeaId", "rankProfileId", "rankValue" FROM rank WHERE "rankProfileId"=${profileId}`
}
