import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state,action)=>{
            state.loading = true
        },
        loginSuccess: (state,action)=>{
            state.currentUser=action.payload
            state.error=null
            state.loading=false
        },
        loginFail: (state,action)=>{
            state.currentUser=null
            state.error=action.payload
            state.loading=false
        }
    }
})

export const {loginFail, loginStart, loginSuccess} = userSlice.actions
export default userSlice.reducer