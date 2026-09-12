import { motion } from 'framer-motion'
import { FiArrowRight, FiCode, FiZap } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark pt-20 relative overflow-hidden'>
      {/* Animated Grid Background */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: `linear-gradient(rgba(109, 40, 217, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 40, 217, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'slideInRight 20s linear infinite'
        }} />
      </div>

      {/* Animated Blobs */}
      <motion.div
        className='absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className='absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 backdrop-blur-sm group hover-lift'
          >
            <span className='text-accent text-sm font-semibold flex items-center gap-2'>
              <FiZap className='inline animate-pulse' />
              Build with React & Vite
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='text-6xl md:text-8xl font-black mb-6 leading-tight'
          >
            <span className='block mb-4'>Hey, I'm</span>
            <span className='gradient-text text-7xl md:text-8xl font-black'>
              Farooquei Rehan
            </span>
          </motion.h1>

          {/* Subtitle with Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light'
          >
            Full-Stack Developer 💻 | Creative Coder 🚀 | Turning ideas into <span className='text-accent font-semibold'>interactive experiences</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(109, 40, 217, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg font-bold text-lg flex items-center gap-2 hover:shadow-lg transition-all relative group overflow-hidden'
            >
              <FiCode className='inline' />
              Explore My Work
              <FiArrowRight className='group-hover:translate-x-1 transition-transform' />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(109, 40, 217, 1)' }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 border-2 border-primary/50 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all'
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links with Hover Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex justify-center gap-6 flex-wrap'
          >
            {[
              { name: 'GitHub', icon: '🐙' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Twitter', icon: '𝕏' },
              { name: 'Email', icon: '✉️' }
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href='#'
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className='p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 transition-all border border-primary/30 hover:border-accent/50 text-2xl group'
              >
                <span className='group-hover:animate-bounce'>{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          >
            <div className='w-6 h-10 border-2 border-accent rounded-full flex justify-center'>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-1 h-2 bg-accent rounded-full mt-2'
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero