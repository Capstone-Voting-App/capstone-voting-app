import { createSlice } from '@reduxjs/toolkit'
import { fetchAuth } from './auth'
import { httpConfig } from '../ui/utils/http-config'

const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    setProfileByProfileId: (profile, action) => {
      return action.payload
    },
    setProfiles: (profile, action) => action.payload
  }
})

export const {setProfileByProfileId, setProfiles} = profileSlice.actions

export default profileSlice.reducer

export const fetchProfilesByProfileCohort = (profileCohort) => async (dispatch) => {
  const {data} =  await httpConfig.get(`/apis/profile/profileCohort/${profileCohort}`)
  dispatch(setProfiles(data))
}

// export const fetchProfileByProfileId = () => async (dispatch, getState) => {
//   await dispatch(fetchAuth())
//   const {auth} = getState()
//   console.log(auth)
//   if(auth !== null) {
//     const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
//     console.log(data)
//     dispatch(setProfileByProfileId(data))
//   }
// }


