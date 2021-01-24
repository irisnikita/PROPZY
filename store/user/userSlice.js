import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    user: {},
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUser(state, action) {
            state.user = action.payload
        },
        increment(state, action) {
            state.count += 1
        },
        decrement(state, action) {
            state.count -= 1
        },
    }
})

export const { increment, decrement, getUser } = userSlice.actions

export const selectUser = state => state.user;

export default userSlice.reducer