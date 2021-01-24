import { combineReducers } from 'redux'

import user from './user/userSlice'

const reducers = combineReducers({
    user,
})

export default reducers;