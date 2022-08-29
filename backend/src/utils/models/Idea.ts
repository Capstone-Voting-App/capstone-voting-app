import { sql } from '../database.utils'

export interface Idea {
  ideaId: string | null,
  ideaProfileId: string | null,
  ideaArchived: boolean,
  ideaDescription: string
}

export async function insertIdea(idea: Idea): Promise<string>{
  const{ideaId, ideaProfileId, ideaArchived, ideaDescription} = idea
  await sql `INSERT INTO idea ("ideaId", "ideaProfileId", "ideaArchived", "ideaDescription") VALUES (gen_random_uuid(), ${ideaProfileId}, ${ideaArchived}, ${ideaDescription})`
  return 'Idea inserted successfully'
}

export async function selectIdeasByProfileCohort (profileCohort: number): Promise<Idea[] | null> {
  const data: Idea[] = await sql `SELECT "ideaId", "ideaProfileId", "ideaArchived", "ideaDescription" FROM idea JOIN profile ON idea."ideaProfileId" = profile."profileId" WHERE "profileCohort" = ${profileCohort}`
  return data
}

export async function deleteIdea (ideaId: string): Promise<string> {
    await sql.begin(sql => [
    sql `DELETE FROM vote WHERE "voteIdeaId" = ${ideaId}`,
    sql `DELETE FROM rank WHERE "rankIdeaId" = ${ideaId}`,
    sql`DELETE FROM idea WHERE "ideaId"= ${ideaId}`
  ])
  return 'Idea deleted successfully'
}

