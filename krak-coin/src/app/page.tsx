// src/app/page.tsx
'use client' // Mark as Client Component


import React from 'react'
import Button from './components/Button' // Importing the Button component

const KrakCoinPage = () => {
  // Defining the handleClick function
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className='p-4'>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-1 h-screen'
        style={{ gridTemplateRows: '1.5fr 2.5fr 1fr' }}
      >
        {/* Item 1: flex container with custom alignment */}
        <div className='bg-blue-200 p-4 col-span-4 flex items-start justify-center '>
          Item 1
        </div>

        {/* Item 2: flex container */}
        <div className='bg-red-200 p-4 col-span-4 row-span-1 flex items-start justify-center'>
          Item 2
          <br />
          More content on the next line
          
        </div>

        {/* Item 3 */}
        <div className='bg-yellow-200 p-4 flex items-center justify-center'>
          Item 3
        </div>

        {/* Item 4 */}
        <div className='bg-purple-200 p-4 flex items-center justify-center'>
          Item 4
        </div>

        {/* Item 5 */}
        <div className='bg-pink-200 p-4 flex items-center justify-center'>
          Item 5
        </div>

        {/* Item 6 */}
        <div className='bg-pink-200 p-4 flex items-center justify-center'>
          Item 6
        </div>
      </div>

      {/*
      <h1 className='text-6xl Sofia-Pro underline'>Hello world!</h1>
      <h1 className='text-3xl mt-4'>Welcome to KrakCoin!</h1>
      {/* Default button with theme-based color 
      <Button
        label='Default Button'
        onClick={() => alert('Default Button Clicked')}
      />

   
      <Button
        label='Custom Blue Button'
        onClick={() => alert('Custom Button Clicked')}
        // Custom hex color
      /> */}
    </div>
  )
}


export default KrakCoinPage
