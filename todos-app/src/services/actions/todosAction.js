import axios from 'axios'
import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from '../constants/todosConstants'

const todosAction = () => async (dispatch) => {
    dispatch({ type: GET_REQUEST })
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch({ type: GET_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: GET_FAILED, payload: error.message })

    }
}
export default todosAction;