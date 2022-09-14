
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import ideas from './ideas'
import votes from './votes'
import ranks from './ranks'
import profile from './profile'

const reducer = combineReducers({auth, ideas, votes, ranks, profile})
export default configureStore({reducer});