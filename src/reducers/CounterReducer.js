import { createSlice } from '@reduxjs/toolkit'
const initialStateValue={
  count: 0
}
export const counterReducer = createSlice({
  name: 'counter',
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1
    },
    decrement: (state) => {
      state.count =state.count - 1
    },
    reset: (state) => {
      state.count = 0
    },

  },
})



export const { increment, decrement,reset } = counterReducer.actions

export default counterReducer.reducer