import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  status: 'checking', // checking, not-authenticated - authenticated
  user: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state, action) => {
      state.status = 'checking'
    },

    onLogin: (state, {payload}) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = null
    },

    onLogout: (state, action) => {
      state.status = 'not-authenticated'
      state.user = null
      state.errorMessage = null
    },

    clearErrorMsg: (state, action) => {
      state.errorMessage = null
    },
  },
})

export const {onChecking, onLogin, onLogout, clearErrorMsg} = authSlice.actions
