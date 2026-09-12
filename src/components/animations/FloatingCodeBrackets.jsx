import { motion } from 'framer-motion'

const FloatingCodeBrackets = () => {
  const brackets = [
    { id: 1, symbol: '{', x: -100, y: -50, delay: 0 },
    { id: 2, symbol: '}', x: 100, y: 50, delay: 0.2 },
    { id: 3, symbol: '</', x: -80, y: 100, delay: 0.4 },
    { id: 4, symbol: '/>', x: 80, y: -100, delay: 0.6 },
    { id: 5, symbol: '[]', x: -120, y: 30, delay: 0.8 },
    { id: 6, symbol: '()', x: 120, y: -30, delay: 1 },
  ]

  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
      {brackets.map((bracket) => (
        <motion.div
          key={bracket.id}
          className='absolute text-3xl font-bold opacity-0 text-primary blur-sm'
          initial={{
            x: bracket.x,
            y: bracket.y,
            opacity: 0,
          }}
          animate={{
            x: [bracket.x, bracket.x + 50, bracket.x],
            y: [bracket.y, bracket.y - 100, bracket.y],
            opacity: [0, 0.6, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 8 + bracket.delay * 2,
            repeat: Infinity,
            delay: bracket.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: '50%',
            top: '50%',
            textShadow: '0 0 20px rgba(109, 40, 217, 0.8)',
          }}
        >
          {bracket.symbol}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingCodeBrackets
