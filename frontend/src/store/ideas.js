import { httpConfig } from '../ui/utils/http-config'
import { createSlice } from '@reduxjs/toolkit'

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
  console.log(data)
  dispatch(setIdeasByProfileCohort(data));
};

export const deleteIdea = (ideaId) => async (dispatch) => {
  await httpConfig.delete(`/apis/idea/ideaId/${ideaId}`);
  dispatch(deleteIdeaFromStore(ideaId));
  console.log('deleted')
};


export default slice.reducer