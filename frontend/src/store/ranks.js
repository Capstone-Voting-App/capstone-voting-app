import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../ui/utils/http-config'
import { fetchVotesByVoteIdeaId } from './votes'

const slice = createSlice({
  name: "ranks",
  initialState: [],
  reducers: {
    setRanksByProfileCohort: (ranks, action) => {
      return action.payload
    },
  }
})

export const {setRanksByProfileCohort} = slice.actions

export const fetchRanksByProfileCohort = (profileCohort) => async (dispatch) => {
  const {data} = await httpConfig.get(`/apis/rank/profileCohort/${profileCohort}`);
  dispatch(setRanksByProfileCohort(data));
  console.log(data)

  for (let rank of data) {
    dispatch(fetchVotesByVoteIdeaId(rank.ideaId))
  }
};
export default slice.reducer