// //-----plan------//
// //declare constants
// //initilize state
// //create action
// //create reducer function
// //createStore has three methods like: getState(), subscribe(), dispatch()
// const { createStore } = require("redux")

// //constants
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'
// const ADD_USER = 'ADD_USER'


// //inilize state
// const iniState = {
//     user: ['ahad'],
//     count: 1
// }
// //create action
// const incCounter = () => {
//     return {
//         type: INCREMENT
//     }
// }
// const decCounter = () => {
//     return {
//         type: DECREMENT
//     }
// }
// const resetCounter = () => {
//     return {
//         type: RESET
//     }
// }
// //create action for add_user
// const addUser = user => {
//     return {
//         type: ADD_USER,
//         payload: user
//     }
// }

// //create reducer function
// const counterReducer = (state = iniState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }
//         case ADD_USER:
//             return {
//                 user: [...state.user, action.payload],
//                 count: state.count + 1
//             }
//         default:
//             state


//     }
// }
// //create store
// const store = createStore(counterReducer);

// //subscribe store
// store.subscribe(() => {
//     console.log(store.getState());
// })
// //dispatch action
// // store.dispatch(incCounter())
// // store.dispatch(incCounter())
// // store.dispatch(decCounter())
// // store.dispatch(incCounter())
// // store.dispatch(resetCounter())
// // store.dispatch(incCounter())
// store.dispatch(addUser('anisul islam'))
// store.dispatch(addUser('jhankar vai'))

