import { IsBooleanOptions, IsIntOptions } from 'express-validator/src/options'
import { Schema } from 'express-validator'

export const signupValidator: Schema = {
  profileCohort: {
    trim: true,
    isInt: true,
    isLength: {
      errorMessage: 'Cohort must be 1 to 3 digits',
      options: {min: 1, max: 999}
    }
  },

  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    //Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
    //normalizeEmail: true,
    trim: true
  },
  profilePassword: {
    isLength: {
      errorMessage: 'Password must be at least eight characters',
      options: { min: 8 }
    },
    trim: true,
    escape: true
  },
  profileName: {
    trim: true,
    escape: true,
    isLength: {
      errorMessage: 'Profile name must be less than 32 characters',
      options: {min: 1, max: 32}
    }
  }
};