import React, { useEffect } from 'react'
import styles from './Button.module.scss'

// TODO: create a spinner component then add a loading prop to show the spinner when loading
const Button = ({ children, className, type, disabled, onClick, rounded }) => {
  // types are primary/ secondary / warning /error /dark
  useEffect(() => {
    if (!type) return
    const root = document.documentElement
    root?.style.setProperty('--button-type', type)
  }, [type])
  return (
    <button
      className={`${styles.btn} ${className || ''} ${
        rounded ? styles.rounded : ''
      } ${styles[type]} rounded-xl transition-all duration-500`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
