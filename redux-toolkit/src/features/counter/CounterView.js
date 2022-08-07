import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmmount, reset } from './counterSlice';


const CounterView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>counter:{count}</h2>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmmount(10))}>incrementByAmmount</button>

        </div>
    );
};

export default CounterView;