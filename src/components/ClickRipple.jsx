import { useEffect, useState } from 'react'

const ClickRipple = () => {
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      setRipples(prev => [...prev, newRipple])

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 600)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className='fixed rounded-full pointer-events-none'
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            border: '2px solid rgba(6, 182, 212, 0.8)',
            animation: `ripple 0.6s ease-out forwards`,
            zIndex: 40
          }}
        />
      ))}
      <style>{`
        @keyframes ripple {
          to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default ClickRipple