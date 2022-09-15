import { httpConfig } from '../ui/utils/http-config'
import { createSlice } from '@reduxjs/toolkit'
import { fetchVotesByVoteIdeaId } from './votes'
import { fetchRanksByProfileCohort } from './ranks'


const slice = createSlice({
  name: "ideas",
  initialState: [],
  reducers: {
    setIdeasByProfileCohort: (ideas, action) => {
      return action.payload
    },
    deleteIdeaFromStore: (ideas, action) => {
     ideas.splice(ideas.findIndex(idea => idea.ideaId === action.payload),1)
    }
  }
})

export const {setIdeasByProfileCohort, deleteIdeaFromStore} = slice.actions

export const fetchIdeasByProfileCohort = (profileCohort) => async (dispatch) => {
  const {data} = await httpConfig.get(`/apis/idea/profileCohort/${profileCohort}`);
  dispatch(setIdeasByProfileCohort(data));
  let profile
  for (let idea  of data) {
    dispatch(fetchVotesByVoteIdeaId(idea.ideaId))
    // dispatch(fetchRanksByProfileCohort(profile.profileCohort))
  }
};

export const deleteIdea = (ideaId) => async (dispatch) => {
  await httpConfig.delete(`/apis/idea/ideaId/${ideaId}`);
  dispatch(deleteIdeaFromStore(ideaId));
};


export default slice.reducer