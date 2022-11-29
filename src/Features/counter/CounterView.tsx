import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { changeIncrementAmount, decrement, increment } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>count: {count.value}</h1>
            <p>{count.incrementAmount}</p>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(changeIncrementAmount(5))}>changeIncrementAmount</button>
        </div>
    );
};

export default CounterView;