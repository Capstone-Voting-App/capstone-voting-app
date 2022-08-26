import {sql} from '../database.utils'
import {promises} from "dns";

export interface Profile{
profileId: string | null,
  profileActivationToken: string | null,
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

export async function updateProfile (profile: Profile): Promise<string> {
 const {profileId, profileActivationToken, profileCohort, profileEmail, profileHash,profileIsInstructor, profileName} = profile
  await sql `UPDATE "profile" SET "profileActivationToken" = ${profileActivationToken}, "profileCohort" = ${profileCohort}, "profileEmail" = ${profileEmail}, "profileHash" = ${profileHash}, "profileIsInstructor" = ${profileIsInstructor}, "profileName" = ${profileName} WHERE "profileId" = ${profileId}`
  return 'Profile updated successfully'
}

export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Profile|null> {
  const result = await sql <Profile[]> `SELECT "profileId", "profileActivationToken", "profileCohort", "profileEmail", "profileHash", "profileIsInstructor", "profileName" FROM "profile" WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}
export async function selectProfileByProfileEmail (profileEmail: string) : Promise<Profile|null> {
  const result = await sql <Profile[]>`SELECT "profileId", "profileActivationToken", "profileCohort", "profileEmail", "profileHash", "profileIsInstructor", "profileName" FROM "profile" WHERE "profileEmail" = ${profileEmail}`
  return result?.length === 1 ? result[0] : null
}

