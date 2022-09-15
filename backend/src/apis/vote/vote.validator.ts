import { Schema } from 'express-validator'

export const voteValidator: Schema = {
  voteIdeaId: {
    isUUID: {
      errorMessage: 'please provide a valid VoteIdeaId'
    }
  },
  // voteProfileId: {
  //   isUUID: {
  //     errorMessage: 'please provide a valid VoteProfileId'
  //   }
  // }
}