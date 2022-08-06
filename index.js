//**task plan**/
//1.declare constants
//2.inilize state
//3.create action
//4.create reducer function
//5.create store
//6.dispatch action
const { default: axios } = require('axios')
const { createStore, combineReducers, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')
const thunk = require('redux-thunk').default

//constants
//constants for product
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE = 'DELETE'
//constants for cart
const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'

//constants for api
const API_REQUEST = 'API_REQUEST'
const API_SUCCESS = 'API_SUCCESS'
const API_FAILED = 'API_FAILED'


//state inilize
const iniProduct = {
    product: ['suger'],
    numberofProduct: 1
}
//state inilize
const iniCartProduct = {
    cartProduct: ['suger'],
    numberofProduct: 1
}

//state inilize for api
const initApiState = {
    todo: [],
    isLoading: false,
    error: null
}

//create actions
//actions for product
const productGetAction = () => {
    return {
        type: GET_PRODUCTS
    }
}
const productAddAction = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}


//actions for cart
const cartGetAction = () => {
    return {
        type: GET_CART
    }
}
const cartAction = productofCart => {
    return {
        type: ADD_CART,
        payload: productofCart
    }
}

//actions create for api
const requestAction = () => {
    return {
        type: API_REQUEST
    }
}
const successAction = (data) => {
    return {
        type: API_SUCCESS,
        payload: data
    }
}
const failedAction = (errorMessage) => {
    return {
        type: API_FAILED,
        payload: errorMessage
    }
}

//create reducer fucntions
//reducer function for product
const prodcutReducer = (state = iniProduct, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return state
        case ADD_PRODUCT:
            return {
                product: [...state.product, action.payload],
                numberofProduct: state.numberofProduct + 1
            }


        default:
            return state


    }
}
//cart-reducer
const cartReducer = (state = iniCartProduct, action) => {
    switch (action.type) {
        case GET_CART:
            return state
        case ADD_CART:
            return {
                cartProduct: [...state.cartProduct, action.payload],
                numberofProduct: state.numberofProduct + 1
            }
        default:
            return state
    }
}

//todo reducer function
const todoReducer = (state = initApiState, action) => {
    switch (action.type) {
        case API_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todo: action.payload

            }
        case API_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}



// combine-reducers
const reducers = combineReducers({
    reducerP: prodcutReducer,
    reducerCart: cartReducer
})
// create-store
// const store = createStore(reducers, applyMiddleware(logger))
//subscribe
// store.subscribe(() => {
//     console.log(store.getState());
// })
//dispatch-action
// store.dispatch(productGetAction())
// store.dispatch(productAddAction('salt'))
// store.dispatch(productGetAction())
// store.dispatch(productAddAction('table'))
// store.dispatch(cartGetAction())
// store.dispatch(cartAction('cartSuger'))
// store.dispatch(productAddAction('table'))


//part: loaded data with axios
const url = 'https://jsonplaceholder.typicode.com/todos'
//fetch data function, asyncrounus dispatch action
const fetchData = () => {
    return (dispatch) => {
        dispatch(requestAction())
        axios.get(url)
            .then(res => {
                // const todos = res.data
                // const title = todos.map(todo => todo.title)
                // console.log(title)
                dispatch(successAction(res.data))
            })
            .catch(error => {
                const message = error.message

                dispatch(failedAction(message))
            })
    }
}

const store = createStore(todoReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())

