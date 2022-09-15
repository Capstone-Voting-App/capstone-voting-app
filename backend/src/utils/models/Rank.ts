import { sql } from '../database.utils'
import {Idea} from "./Idea";

export interface Rank{
  rankIdeaId: string | null,
  rankProfileId: string | null
  rankValue: number
}

export async function insertRank(ranks: Rank[], length: number): Promise<string> {
  console.log(generateValuesForInsert(ranks, length))
  const values = generateValuesForInsert(ranks, length)
  await sql.unsafe (`INSERT INTO rank ("rankIdeaId", "rankProfileId", "rankValue") VALUES ${values}`)
  return 'rank successfully created'
}

export async function selectRankByRankIdeaId (ideaId: string): Promise<Rank[]> {
  return sql<Rank[]> `SELECT "rankIdeaId", "rankProfileId", "rankValue" FROM rank WHERE "rankIdeaId"=${ideaId}`
}

export async function selectRankByRankProfileId (profileId: string): Promise<Rank[]> {
  return sql<Rank[]> `SELECT "rankIdeaId", "rankProfileId", "rankValue" FROM rank WHERE "rankProfileId"=${profileId}`
}

function generateValuesForInsert(ranks: Rank[], length:number): any {
  if (ranks.length !== length) {
    throw new Error("Data is malformed")
  }
  let values = "";
  for (let i=0; i < ranks.length; i++) {
    if (i + 1 === ranks.length) {
      values = `${values} ('${ranks[i].rankIdeaId}', '${ranks[i].rankProfileId}', ${ranks[i].rankValue})`
    }
    else {
      values = `${values} ('${ranks[i].rankIdeaId}', '${ranks[i].rankProfileId}', ${ranks[i].rankValue}), `
    }
  }
  return values
}
export async function selectRanksByProfileCohort (profileCohort: number): Promise<Rank[] | null> {
  const data: Rank[] = await sql `SELECT "rankIdeaId", "rankProfileId", "rankValue" FROM rank JOIN profile ON rank."rankProfileId" = profile."profileId" WHERE "profileCohort" = ${profileCohort}`
  return data
}
