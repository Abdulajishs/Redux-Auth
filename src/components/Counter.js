import { useDispatch, useSelector } from 'react-redux';

import { counterAction } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = ()=>{
    dispatch(counterAction.increment())
  }

  const increaseHandler = ()=>{
    dispatch(counterAction.increase(5))
  }

  const decrementtHandler = ()=>{
    dispatch(counterAction.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button  onClick={incrementHandler}>INCREMENT</button>
        <button  onClick={increaseHandler}>INCREASE</button>
        <button onClick={decrementtHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  ); 
};

export default Counter;
