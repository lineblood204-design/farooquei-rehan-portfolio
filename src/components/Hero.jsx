import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-darker to-dark pt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
          <div className='absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative z-10'
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30'
          >
            <span className='text-accent text-sm font-semibold'>Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            Hi, I'm{' '}
            <span className='bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>
              Farooquei Rehan
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto'>
            Full-Stack Developer crafting scalable, user-centric web applications that bridge design and functionality
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all'
            >
              View My Work <FiArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-3 border-2 border-primary rounded-lg font-semibold hover:bg-primary/10 transition-all'
            >
              Download CV
            </motion.button>
          </div>

          {/* Social Links */}
          <div className='flex justify-center gap-6'>
            <a href='#' className='p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
            <a href='#' className='p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
              </svg>
            </a>
            <a href='#' className='p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M23.953 4.57a10 10 0 002.856-3.915a9.953 9.953 0 01-2.824.856a4.958 4.958 0 00-8.86 4.023A14.129 14.129 0 011.671 3.149a4.94 4.94 0 001.524 6.573a4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084a4.964 4.964 0 004.6 3.44A9.865 9.865 0 010 19.54a13.977 13.977 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <div className='w-6 h-10 border-2 border-primary rounded-full flex justify-center'>
            <div className='w-1 h-2 bg-primary rounded-full mt-2'></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero