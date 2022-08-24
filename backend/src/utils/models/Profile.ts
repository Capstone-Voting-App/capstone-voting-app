import {sql} from '../database.utils'

export interface Profile{
profileId: string | null,
  profileActivationToken: string,
  profileCohort: number,
  profileEmail: string,
  profileHash: string,
  profileIsInstructor: boolean,
  profileName: string
}

export interface PartialProfile{
  profileId: string | null,
  profileCohort: number,
  profileEmail: string,
  profileIsInstructor: boolean,
  profileName: string
}

export async function insertProfile (profile: Profile): Promise<string> {
  const { profileActivationToken, profileCohort, profileEmail, profileHash, profileIsInstructor, profileName } = profile
  await sql `INSERT INTO profile("profileId", "profileActivationToken", "profileCohort", "profileEmail", "profileHash", "profileIsInstructor", "profileName") VALUES(gen_random_uuid(), ${profileActivationToken}, ${profileCohort}, ${profileEmail}, ${profileHash}, ${profileIsInstructor}, ${profileName})`
  return 'Profile created successfully'
}
