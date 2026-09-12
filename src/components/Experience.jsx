import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'TechCorp',
      period: '2022 - Present',
      description: 'Led development of 3 production applications and mentored 2 junior developers',
      achievements: [
        'Built scalable web applications serving 100K+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers on best practices'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed and scaled web applications for startup products',
      achievements: [
        'Built and scaled web applications from MVP to production',
        'Implemented REST APIs and database optimization',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'WebAgency',
      period: '2018 - 2020',
      description: 'Started my career building client projects and learning web technologies',
      achievements: [
        'Developed 10+ client websites and web applications',
        'Learned modern frontend and backend technologies',
        'Improved code quality and best practices'
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      school: 'University Name',
      year: '2018'
    },
    {
      degree: 'AWS Certified Developer',
      school: 'Amazon Web Services',
      year: '2021'
    },
    {
      degree: 'Advanced JavaScript Certification',
      school: 'Online Platform',
      year: '2022'
    }
  ]

  return (
    <section id='experience' className='py-20 px-4 sm:px-6 lg:px-8 bg-dark'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
            My <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Experience</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Work Experience */}
            <div>
              <h3 className='text-2xl font-bold mb-8'>Work Experience</h3>
              <div className='space-y-6'>
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className='p-4 rounded-lg bg-primary/10 border border-primary/20 hover:border-primary/50 transition-all'
                  >
                    <div className='flex justify-between items-start mb-2'>
                      <div>
                        <h4 className='text-lg font-bold text-accent'>{exp.role}</h4>
                        <p className='text-slate-400 text-sm'>{exp.company}</p>
                      </div>
                      <span className='text-xs bg-primary/20 px-3 py-1 rounded-full text-accent'>
                        {exp.period}
                      </span>
                    </div>
                    <p className='text-slate-300 text-sm mb-3'>{exp.description}</p>
                    <ul className='space-y-1'>
                      {exp.achievements.map((achievement, aidx) => (
                        <li key={aidx} className='text-sm text-slate-400 flex items-start'>
                          <span className='text-accent mr-2'>▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className='text-2xl font-bold mb-8'>Education & Certifications</h3>
              <div className='space-y-6'>
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className='p-4 rounded-lg bg-accent/10 border border-accent/20 hover:border-accent/50 transition-all'
                  >
                    <div className='flex justify-between items-start mb-2'>
                      <div>
                        <h4 className='text-lg font-bold text-secondary'>{edu.degree}</h4>
                        <p className='text-slate-400 text-sm'>{edu.school}</p>
                      </div>
                      <span className='text-xs bg-accent/20 px-3 py-1 rounded-full text-secondary'>
                        {edu.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience