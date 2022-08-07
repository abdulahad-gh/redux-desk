import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from "../constants/todosConstants"


const initState = {
    todos: [],
    isLoading: false,
    error: null
}

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case GET_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state
    }

}
export default todosReducer;