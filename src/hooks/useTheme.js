import { useState, useEffect } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        applyTheme(savedTheme)
    }, [])

    const applyTheme = (newTheme) => {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        applyTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return { theme, toggleTheme }
}