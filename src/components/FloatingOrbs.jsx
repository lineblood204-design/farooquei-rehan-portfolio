import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

const FloatingOrbs = () => {
  const mousePos = useMousePosition()

  const orbs = [
    { size: 'w-72 h-72', color: 'from-primary/30', delay: 0, x: '-30%', y: '20%' },
    { size: 'w-96 h-96', color: 'from-accent/20', delay: 2, x: '70%', y: '60%' },
    { size: 'w-80 h-80', color: 'from-secondary/25', delay: 4, x: '40%', y: '-10%' }
  ]

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none'>
      {orbs.map((orb, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${orb.size} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}
          style={{
            background: `linear-gradient(135deg, var(--color-primary), transparent)`,
            left: orb.x,
            top: orb.y
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 50, -50, 0]
          }}
          transition={{
            duration: 8,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

export default FloatingOrbs