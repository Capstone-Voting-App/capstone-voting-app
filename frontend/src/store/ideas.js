import { httpConfig } from '../ui/utils/http-config'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "ideas",
  initialState: [],
  reducers: {
    getIdeasByProfileCohort: (ideas, action) => {
      return action.payload
    }
  }
})

export const {getIdeasByProfileCohort} = slice.actions

export const fetchIdeasByProfileCohort = () => async (dispatch) => {
  const {data} = await httpConfig.get("/apis/idea/");
  dispatch(getIdeasByProfileCohort(data));
};

export default slice.reducer