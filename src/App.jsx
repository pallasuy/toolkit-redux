import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/'

function App() {


  const { counter } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(1);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>  count is {counter}</h1>
      <div className="card" >
        <button onClick={() => dispatch(increment(incrementAmount))}> Increment </button>
        <button onClick={() => dispatch(decrement(incrementAmount))}> Decrement </button>
      </div>
      <div className='number'>
        <label> Amount </label>
        <input
          type='number'
          id='amount'
          placeholder='Add value'
          value={incrementAmount}
          onChange={(e) => { setIncrementAmount(Number(e.target.value) ?? 1) }}
        />

      </div>

      <p>
        By GPallas
      </p>
    </>
  )
}

export default App
