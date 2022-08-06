//**task plan**/
//1.declare constants
//2.inilize state
//3.create action
//4.create reducer function
//5.create store
//6.dispatch action
const { createStore, combineReducers, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')


//constants

//constants for product
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE = 'DELETE'
//constants for cart
const GET_CART = 'GET_CART'
const ADD_CART = 'ADD_CART'

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
// combine-reducers
const reducers = combineReducers({
    reducerP: prodcutReducer,
    reducerCart: cartReducer
})
//create-store
const store = createStore(reducers, applyMiddleware(logger))
//subscribe
store.subscribe(() => {
    console.log(store.getState());
})
//dispatch-action
store.dispatch(productGetAction())
store.dispatch(productAddAction('salt'))
store.dispatch(productGetAction())
store.dispatch(productAddAction('table'))
store.dispatch(cartGetAction())
store.dispatch(cartAction('cartSuger'))
store.dispatch(productAddAction('table'))

