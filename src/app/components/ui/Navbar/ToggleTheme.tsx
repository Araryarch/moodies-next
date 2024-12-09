'use client'

import React, { useState, useEffect } from 'react'
import Tooltips from '../Tooltips'
import { Sun, Moon } from 'lucide-react'

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
    if (isDarkMode) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <Tooltips text="Theme">
      <button className="rounded-full p-3 bg-secondary" onClick={toggleTheme}>
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </Tooltips>
  )
}

export default ToggleTheme
