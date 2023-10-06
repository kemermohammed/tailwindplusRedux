import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.kem.value)
  const dispatch = useDispatch()

  return (
    <div>
      
      <div>
        <button className='w-28 text-2xl bg-green-400 ml-4 mr-4 mt-4 mb-4'
          
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div className='text-center text-4xl'><span>count-- {count}</span></div>
        <button className='w-28 text-2xl bg-green-400 ml-4 mr-4 mt-4 mb-4'
          
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}