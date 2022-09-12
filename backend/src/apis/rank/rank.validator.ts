import { Schema } from 'express-validator'
import { isBigInt64Array } from 'util/types'

export const rankValidator: Schema = {

  ranks: {
    custom: {
      options: async (value: any, {req}) => {
        if (value.length !== Number.isInteger(req.body.ideasLength)) {
          return false
        }
        return true
      }
    }
  },
  'ranks.*.rankIdeaId': {
    isUUID: {
      errorMessage: 'please provide a valid VoteIdeaId'
    }
  },
  'ranks.*.rankProfileId': {
    isUUID: {
      errorMessage: 'please provide a valid VoteProfileId'
    }
  },
  'ranks.*.rankValue': {
    isInt: true,
    isLength: {
      errorMessage: 'Please enter a value between 1 and 100.',
      options: {min: 1, max: 100}
    }
  }
}