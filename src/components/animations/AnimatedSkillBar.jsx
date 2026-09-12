import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const AnimatedSkillBar = ({ skill, percentage = 80 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className='mb-6'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-sm font-semibold'>{skill}</span>
        <span className='text-xs text-accent font-bold'>{percentage}%</span>
      </div>
      <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10'>
        <motion.div
          className='h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full'
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
        />
      </div>
    </div>
  )
}

export default AnimatedSkillBar