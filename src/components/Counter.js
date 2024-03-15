import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  const incrementHandler = ()=>{
    dispatch({type : "INCREMENTBY5"})
  }
  const decrementtHandler = ()=>{
    dispatch({type : "DECREMENTBY5"})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button  onClick={incrementHandler}>INCREMENTBY5</button>
        <button onClick={decrementtHandler}>DECREMENTBY5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
