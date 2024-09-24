import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './store/actionType';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAction(1))}>Increment</button>
      <button onClick={() => dispatch(decrementAction(1))}>Decrement</button>
    </div>
  );
};

export default App;
