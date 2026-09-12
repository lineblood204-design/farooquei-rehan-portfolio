import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiServer } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode className='w-8 h-8' />,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiServer className='w-8 h-8' />,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiDatabase className='w-8 h-8' />,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiTool className='w-8 h-8' />,
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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
    <section id='skills' className='py-20 px-4 sm:px-6 lg:px-8 bg-dark'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
            My <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Skills</span>
          </h2>

          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(109, 40, 217, 0.2)' }}
                className='p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all'
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className='text-xl font-bold mb-4'>{category.title}</h3>
                <div className='space-y-2'>
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className='flex items-center'>
                      <div className='w-2 h-2 bg-accent rounded-full mr-3'></div>
                      <span className='text-slate-300'>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills