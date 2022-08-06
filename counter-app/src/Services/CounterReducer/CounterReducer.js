import { INCREMENT, DECREMENT, RESET } from '../CounterConstants/CounterConstants'


//init state
const initCounter = {
    count: 0
}

//create reducer
const counterReducer = (state = initCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1

            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1

            }
        case RESET:
            return {
                ...state,
                count: 0

            }
        default:
            return state
    }
}

export default counterReducer;