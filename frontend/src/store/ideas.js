import { httpConfig } from '../ui/utils/http-config'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "ideas",
  initialState: [],
  reducers: {
    setIdeasByProfileCohort: (ideas, action) => {
      return action.payload
    }
  }
})

export const {setIdeasByProfileCohort} = slice.actions

export const fetchIdeasByProfileCohort = (profileCohort) => async (dispatch) => {
  const {data} = await httpConfig.get(`/apis/idea/profileCohort/${profileCohort}`);
  console.log(data)
  dispatch(setIdeasByProfileCohort(data));
};

export default slice.reducer