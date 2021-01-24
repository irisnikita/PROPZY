import { combineReducers } from 'redux'

import userSlice from './user/userSlice'

const reducers = combineReducers({
    userSlice,
})

export default reducers;