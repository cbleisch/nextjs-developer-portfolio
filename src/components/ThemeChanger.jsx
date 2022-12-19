import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeChanger = ({ styles }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const resolvedThemeAction =  resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode';
  const resolvedThemeLabel =  resolvedTheme === 'dark' ? 'Dark Mode' : 'Light Mode';

  return (
    <>
    <label className={'mr-4'}>{resolvedThemeLabel}</label>
    <button
      aria-label={resolvedThemeAction}
      title={resolvedThemeAction}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className={styles}
    >
      {resolvedTheme === 'dark' ? (
        <span className="block w-4 h-4 bg-white rounded-full group-hover:-translate-y-1 transition-transform" />
      ) : (
        <span className="block w-4 h-4 bg-black rounded-full group-hover:-translate-y-1 transition-transform" />
      )}
    </button>
    </>
  )
}

export default ThemeChanger
