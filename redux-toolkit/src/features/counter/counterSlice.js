const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: state => {
            state.count = state.count + 1
        },
        decrement: state => {
            state.count = state.count - 1

        },
        reset: state => {
            state.count = 0

        },
        incrementByAmmount: (state, actions) => {
            state.count = state.count + actions.payload

        }

    }
})
export const { increment, decrement, reset, incrementByAmmount } = counterSlice.actions
export default counterSlice.reducer;