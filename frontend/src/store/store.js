
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import ideas from './ideas'
import votes from './votes'
const reducer = combineReducers({auth, ideas, votes})
export default configureStore({reducer});