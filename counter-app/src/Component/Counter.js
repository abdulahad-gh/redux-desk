import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Services/CounterActions/CounterAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementCounter())

    }
    const handleReset = () => {
        dispatch(resetCounter())

    }
    const handleDecrement = () => {
        dispatch(decrementCounter())

    }

    return (
        <div>
            <h2>This is counter app. that make using react and redux</h2>
            <h1>counter: {count}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                <button onClick={handleIncrement}>increment</button>
                <button onClick={handleReset}>reset</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;