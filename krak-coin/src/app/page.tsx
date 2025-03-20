// src/app/page.tsx
'use client' // Mark as Client Component

import Button from './components/Button'

const KrakCoinPage = () => {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div>
      <h1>Welcome to KrakCoin!</h1>
      <Button label='Click Me' onClick={handleClick} />
      <Button label='Click Me2' onClick={handleClick} color='red'/>
    </div>
  )
}

export default KrakCoinPage
