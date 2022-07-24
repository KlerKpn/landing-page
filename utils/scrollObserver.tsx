import React, { useCallback, useState, useEffect } from 'react'

interface IScrollValue {
  scrollY: number
}

interface Props {
  children: React.ReactNode
}

export const ScrollContext = React.createContext<IScrollValue>({
  scrollY: 0,
})

const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollObserver
