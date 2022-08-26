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