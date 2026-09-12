import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hover = true, neon = false, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(109, 40, 217, 0.2)' } : {}}
      className={`relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${neon ? 'shadow-lg shadow-cyan-500/20 border-cyan-500/30' : 'hover:border-white/20'} ${className}`}
      {...props}
    >
      <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none' />
      {children}
    </motion.div>
  )
}

export default GlassCard