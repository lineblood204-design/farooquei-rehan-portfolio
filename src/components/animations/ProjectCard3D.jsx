import { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard3D = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className='h-full'
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d',
          transformPerspective: 1000,
        }}
      >
        {/* Front Side */}
        <motion.div
          style={{ backfaceVisibility: 'hidden' }}
          className='p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all h-full flex flex-col'
        >
          <div className='text-5xl mb-4'>{project.image}</div>
          <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
          <p className='text-slate-300 text-sm mb-4 leading-relaxed flex-grow'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2'>
            {project.tech.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className='px-2 py-1 text-xs rounded-full bg-primary/20 text-accent border border-primary/30'
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 180,
          }}
          className='absolute inset-0 p-6 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/50 h-full flex flex-col justify-between'
        >
          <div>
            <h4 className='text-lg font-bold mb-4 text-accent'>Technologies</h4>
            <div className='space-y-2'>
              {project.tech.map((tech, idx) => (
                <div key={idx} className='text-sm text-slate-300 flex items-center'>
                  <span className='w-2 h-2 bg-accent rounded-full mr-2' />
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className='flex gap-3'>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 py-2 px-3 rounded-lg bg-primary/30 hover:bg-primary/50 transition-colors text-sm font-medium text-center'
            >
              Code
            </a>
            <a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 py-2 px-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors text-sm font-medium text-center'
            >
              Live
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard3D
