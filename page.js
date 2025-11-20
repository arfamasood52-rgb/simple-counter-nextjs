"use client"
import React, { useState } from 'react'

function Homepage() {
  const [value, setValue] = useState(0)

  function add() {
    if (value < 10) {
      setValue(value + 1)
    } else {
      alert("Value can't go above 10!")
    }
  }

 function subtract() {
    // Stop if value is  0
    if (value > 0) {
      setValue(value - 1)
    } else {
      alert("Value can't go below 0!")
    }
  }

  return (
    <div className='bg-amber-200 min-h-screen flex flex-col items-center justify-center space-y-5'>
      <h1 className='font-bold text-[40px] '>Counter Program</h1>
      <h1 className=' font-bold text-[30px]'>{value}</h1>
      <div className='space-x-5'>
        <button 
          onClick={add} 
          className='bg-amber-700 py-2 px-8 rounded-md text-white'
        >
          Add
        </button>
        <button 
          onClick={subtract} 
          className='bg-amber-700 py-2 px-8 rounded-md text-white'
        >
          Subtract
        </button>
      </div>
    </div>
  )
}

export default Homepage