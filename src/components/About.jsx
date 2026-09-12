import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-darker'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
            About <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Me</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='rounded-lg overflow-hidden h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center'
            >
              <div className='text-6xl'>👨‍💻</div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
                I'm Farooquei Rehan, a passionate Full-Stack Developer from Rehan with 3+ years of professional experience building scalable, user-centric web applications.
              </p>
              
              <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
                My superpower is bridging the gap between beautiful design and robust functionality. I obsess over user experience while maintaining clean, scalable code architecture.
              </p>

              <p className='text-lg text-slate-300 mb-8 leading-relaxed'>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring emerging technologies.
              </p>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-4'>
                <div className='bg-primary/10 rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold text-accent'>50+</div>
                  <p className='text-sm text-slate-400 mt-2'>Projects</p>
                </div>
                <div className='bg-primary/10 rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold text-accent'>500+</div>
                  <p className='text-sm text-slate-400 mt-2'>GitHub Stars</p>
                </div>
                <div className='bg-primary/10 rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold text-accent'>2K+</div>
                  <p className='text-sm text-slate-400 mt-2'>Followers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About