import { httpConfig } from '../ui/utils/http-config'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "votes",
  initialState: [],
  reducers: {
    setVotes: (ideas, action) => {
      return action.payload
    }
  }
})

export const {setVotes} = slice.actions

export const fetchVotesByProfileCohort = (profileCohort) => async (dispatch) => {
  const {data} = await httpConfig.get(`/apis/vote/profileCohort/${profileCohort}`);
  console.log(data)
  dispatch(setVotes(data));
};
export default slice.reducer