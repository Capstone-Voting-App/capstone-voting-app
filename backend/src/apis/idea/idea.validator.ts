import { Schema } from 'express-validator'

export const ideaValidator: Schema = {
  ideaProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid'
    }
  },
  ideaDescription: {
    isLength: {
      errorMessage: 'Description cannot exceed 255 characters in length.',
      options: { min: 1, max: 255 },
    },
      trim: true,
      escape: true
  }
}