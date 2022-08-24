import {Schema} from 'express-validator';

export const signupValidator: Schema= {
  profileCohort: {
    isInt: true,
    isLength: {
      errorMessage: 'Cohort number must be between one and three numbers',
      options: { min: 1, max: 999 }
    }
  },
    profileEmail: {
      isEmail: {
        errorMessage: 'Please provide a valid email'
      },
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
      options: { min: 1, max: 32 }
    }
}}
