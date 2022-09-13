
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import ideas from './ideas'
import votes from './votes'
import ranks from './ranks'

const reducer = combineReducers({auth, ideas, votes, ranks})
export default configureStore({reducer});