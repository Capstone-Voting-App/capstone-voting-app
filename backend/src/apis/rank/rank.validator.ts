import { Schema } from 'express-validator'

export const rankValidator: Schema = {
  rankIdeaId: {
    isUUID: {
      errorMessage: 'please provide a valid VoteIdeaId'
    }
  },
  rankProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid VoteProfileId'
    }
  },
  rankValue: {
    isInt: true,
    isLength: {
      errorMessage: 'Please enter a value between 1 and 100.',
      options: {min: 1, max: 100}
    }
  }
}