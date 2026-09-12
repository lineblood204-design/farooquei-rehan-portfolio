import { motion } from 'framer-motion'

const LiquidBlob = ({ color = 'primary', size = 300, duration = 8, style = {} }) => {
  const colors = {
    primary: 'rgba(109, 40, 217, 0.3)',
    accent: 'rgba(6, 182, 212, 0.3)',
  }

  return (
    <motion.div
      className='absolute blur-3xl mix-blend-multiply filter pointer-events-none'
      animate={{
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 180, 360],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: colors[color],
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        ...style,
      }}
    />
  )
}

export default LiquidBlob