// src/app/components/Button.tsx

import React from 'react'
import styles from '../styles/Button.module.css' // Correct relative import to styles folder

interface ButtonProps {
  label: string
  onClick: () => void
  color?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color }) => {
  return (
    <button
      className={styles.button} // Apply the CSS module class
      style={{ backgroundColor: color }} // Dynamic background color
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
