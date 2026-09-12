import { motion } from 'framer-motion'
import { FiGithub, FiStar } from 'react-icons/fi'

const OpenSource = () => {
  const contributions = [
    {
      name: 'React Documentation',
      description: 'Contributor to official React documentation and examples',
      stars: '180K+',
      link: 'https://github.com/facebook/react'
    },
    {
      name: 'Awesome Full-Stack Libraries',
      description: 'Maintained curated list of full-stack development libraries',
      stars: '2K+',
      link: 'https://github.com/farooquei-rehan/awesome-fullstack'
    },
    {
      name: 'Node.js Utils',
      description: 'Utility library for Node.js developers',
      stars: '500+',
      link: 'https://github.com/farooquei-rehan/nodejs-utils'
    },
    {
      name: 'React Hooks Collection',
      description: 'Collection of reusable React hooks for common patterns',
      stars: '1K+',
      link: 'https://github.com/farooquei-rehan/react-hooks'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-darker'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
            Open Source <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Contributions</span>
          </h2>

          <motion.div
            className='grid md:grid-cols-2 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {contributions.map((contrib, idx) => (
              <motion.a
                key={idx}
                href={contrib.link}
                target='_blank'
                rel='noopener noreferrer'
                variants={item}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(109, 40, 217, 0.2)' }}
                className='p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all block group'
              >
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold group-hover:text-accent transition-colors'>
                      {contrib.name}
                    </h3>
                    <p className='text-slate-400 text-sm mt-1'>{contrib.description}</p>
                  </div>
                  <FiGithub className='w-6 h-6 text-slate-500 group-hover:text-accent transition-colors flex-shrink-0 ml-4' />
                </div>
                <div className='flex items-center gap-2 text-accent'>
                  <FiStar size={16} />
                  <span className='text-sm font-semibold'>{contrib.stars} Stars</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenSource