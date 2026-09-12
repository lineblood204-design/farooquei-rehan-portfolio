import { useEffect, useState } from 'react'

const CursorFollow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <div
        className='fixed w-6 h-6 border-2 border-accent rounded-full pointer-events-none mix-blend-screen z-50 transition-opacity duration-300'
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
        }}
      />

      {/* Follower Cursor */}
      <div
        className='fixed w-8 h-8 border-2 border-primary rounded-full pointer-events-none mix-blend-screen z-40 transition-opacity duration-300'
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.5 : 0,
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          boxShadow: '0 0 30px rgba(109, 40, 217, 0.4)'
        }}
      />

      {/* Glow Effect */}
      <div
        className='fixed w-32 h-32 rounded-full pointer-events-none z-30 mix-blend-screen transition-opacity duration-300'
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.1 : 0,
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
    </>
  )
}

export default CursorFollow