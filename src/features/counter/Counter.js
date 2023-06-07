import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  increamentByAmount,
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [increamentAmount, setIncreamentAmount] = useState(0);
  const addValue = Number(increamentAmount) || 0;
  const resetAll = () => {
    setIncreamentAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div className="">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={increamentAmount}
        onChange={(e) => setIncreamentAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(increamentByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
