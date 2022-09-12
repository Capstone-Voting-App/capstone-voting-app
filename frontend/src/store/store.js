
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import ideas from './ideas'

const reducer = combineReducers({auth, ideas})
export default configureStore({reducer});