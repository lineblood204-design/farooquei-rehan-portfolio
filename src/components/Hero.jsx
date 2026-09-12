import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiZap } from 'react-icons/fi'
import AnimatedBackground from './animations/AnimatedBackground'
import FloatingCodeBrackets from './animations/FloatingCodeBrackets'
import LiquidBlob from './animations/LiquidBlob'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark pt-20 relative overflow-hidden'>
      <AnimatedBackground />
      <FloatingCodeBrackets />
      
      <LiquidBlob color='primary' size={300} duration={8} style={{ top: '10%', left: '5%' }} />
      <LiquidBlob color='accent' size={250} duration={10} style={{ bottom: '10%', right: '10%' }} />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 backdrop-blur-sm group hover-lift'>
            <span className='text-accent text-sm font-semibold flex items-center gap-2'>
              <FiZap className='inline animate-pulse' />
              Build with React & Vite
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className='text-6xl md:text-8xl font-black mb-6 leading-tight'>
            <span className='block mb-4'>Hey, I'm</span>
            <span className='gradient-text text-7xl md:text-8xl font-black'>Farooquei Rehan</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light'>
            Full-Stack Developer 💻 | Creative Coder 🚀 | Turning ideas into <span className='text-accent font-semibold'>interactive experiences</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(109, 40, 217, 0.4)' }} whileTap={{ scale: 0.95 }} className='px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg font-bold text-lg flex items-center gap-2 hover:shadow-lg transition-all relative group'>
              <FiCode className='inline' />
              Explore My Work
              <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
            </motion.button>
            
            <motion.button whileHover={{ scale: 1.05, borderColor: 'rgba(109, 40, 217, 1)' }} whileTap={{ scale: 0.95 }} className='px-8 py-4 border-2 border-primary/50 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all'>
              Download CV
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className='flex justify-center gap-6 flex-wrap'>
            {[
              { name: 'GitHub', icon: '🐙' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Twitter', icon: '𝕏' },
              { name: 'Email', icon: '✉️' }
            ].map((link, idx) => (
              <motion.a key={idx} href='#' whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} className='p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 transition-all border border-primary/30 hover:border-accent/50'>
                <span className='group-hover:animate-bounce'>{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <div className='w-6 h-10 border-2 border-accent rounded-full flex justify-center'>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className='w-1 h-2 bg-accent rounded-full mt-2' />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero