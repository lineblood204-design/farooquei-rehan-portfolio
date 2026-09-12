import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      github: 'https://github.com/farooquei-rehan/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      image: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features',
      tech: ['React', 'Firebase', 'Tailwind', 'Redux'],
      github: 'https://github.com/farooquei-rehan/task-manager',
      live: 'https://task-manager.vercel.app',
      image: '✅'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'SaaS platform for AI-powered content creation with subscription model',
      tech: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/farooquei-rehan/ai-content-gen',
      live: 'https://ai-content-gen.app',
      image: '🤖'
    },
    {
      id: 4,
      title: 'Personal Blog Platform',
      description: 'Headless CMS blog with SEO optimization and dark mode support',
      tech: ['Next.js', 'MDX', 'GraphQL', 'Vercel'],
      github: 'https://github.com/farooquei-rehan/blog-platform',
      live: 'https://farooquei-blog.dev',
      image: '📝'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/farooquei-rehan/analytics-dashboard',
      live: 'https://dashboard.vercel.app',
      image: '📊'
    },
    {
      id: 6,
      title: 'Developer Portfolio',
      description: 'Modern, responsive portfolio website showcasing projects and skills',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      github: 'https://github.com/farooquei-rehan/portfolio',
      live: 'https://farooquei.dev',
      image: '👨‍💻'
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
    <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8 bg-darker'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
            Featured <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Projects</span>
          </h2>

          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -8 }}
                className='group relative p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all overflow-hidden'
              >
                {/* Background gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                <div className='relative z-10'>
                  {/* Image Emoji */}
                  <div className='text-5xl mb-4'>{project.image}</div>

                  {/* Title */}
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>

                  {/* Description */}
                  <p className='text-slate-300 text-sm mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className='px-3 py-1 text-xs rounded-full bg-primary/20 text-accent border border-primary/30'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className='flex gap-3 pt-4 border-t border-primary/20'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors text-sm font-medium'
                    >
                      <FiGithub size={16} /> Code
                    </a>
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors text-sm font-medium'
                    >
                      <FiExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects