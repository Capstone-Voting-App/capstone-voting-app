import { httpConfig } from '../ui/utils/http-config'
import { createSlice, } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "votes",
  initialState: {},
  reducers: {
    setVotes: (votes, action) => {
      return action.payload
    },
    setIndividualVote: (votes, action) => {
      votes [action.payload.ideaId] = action.payload.data
    }
  }
})

export const {setVotes, setIndividualVote} = slice.actions

export const fetchVotesByProfileCohort = (profileCohort) => async (dispatch) => {
  const {data} = await httpConfig.get(`/apis/vote/profileCohort/${profileCohort}`);
  dispatch(setVotes(data));
};

export const fetchVotesByVoteIdeaId = (ideaId) => async (dispatch) => {
  const {data} = await httpConfig.get(`/apis/vote/${ideaId}`);
  dispatch(setIndividualVote({ideaId,data}));
  console.log(data)
};

export default slice.reducer
