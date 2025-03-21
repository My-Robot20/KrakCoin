// src/app/components/Button.tsx

import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  color?: string // Optional custom color prop for dynamic background
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className='py-2 px-4 text-white Sofia-Pro cursor-pointer rounded-lg hover:bg-opacity-80 transition-all duration-300'
      style={{
        backgroundColor: color || 'var(--color-krack-coin-button-bag)', // Use custom color or default to theme color
      }}
    >
      {label}
    </button>
  )
}

export default Button
