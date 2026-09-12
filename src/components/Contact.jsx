import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <FiMail className='w-6 h-6' />,
      title: 'Email',
      detail: 'rehan@farooquei.dev',
      link: 'mailto:rehan@farooquei.dev'
    },
    {
      icon: <FiPhone className='w-6 h-6' />,
      title: 'Phone',
      detail: '+92 XXX XXX XXXX',
      link: 'tel:+92XXXXXXXXXX'
    },
    {
      icon: <FiMapPin className='w-6 h-6' />,
      title: 'Location',
      detail: 'Rehan, Pakistan',
      link: '#'
    }
  ]

  return (
    <section id='contact' className='py-20 px-4 sm:px-6 lg:px-8 bg-dark'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
            Let's <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Connect</span>
          </h2>
          <p className='text-center text-slate-400 mb-12 text-lg'>
            Have a project in mind? Let's build something amazing together!
          </p>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold mb-8'>Get in Touch</h3>
              <div className='space-y-6'>
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.link}
                    whileHover={{ x: 5 }}
                    className='flex items-start gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all'
                  >
                    <div className='p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex-shrink-0'>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className='font-bold text-accent mb-1'>{info.title}</h4>
                      <p className='text-slate-400'>{info.detail}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className='mt-8'>
                <h4 className='font-bold mb-4'>Connect on Social</h4>
                <div className='flex gap-4'>
                  <a href='#' className='p-3 rounded-lg bg-primary/10 hover:bg-primary/20 hover:text-accent transition-all'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </a>
                  <a href='#' className='p-3 rounded-lg bg-primary/10 hover:bg-primary/20 hover:text-accent transition-all'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
                    </svg>
                  </a>
                  <a href='#' className='p-3 rounded-lg bg-primary/10 hover:bg-primary/20 hover:text-accent transition-all'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M23.953 4.57a10 10 0 002.856-3.915a9.953 9.953 0 01-2.824.856a4.958 4.958 0 00-8.86 4.023A14.129 14.129 0 011.671 3.149a4.94 4.94 0 001.524 6.573a4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084a4.964 4.964 0 004.6 3.44A9.865 9.865 0 010 19.54a13.977 13.977 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-2'>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 focus:border-primary/50 focus:outline-none focus:bg-primary/20 transition-all placeholder-slate-500'
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 focus:border-primary/50 focus:outline-none focus:bg-primary/20 transition-all placeholder-slate-500'
                    placeholder='your@email.com'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>Subject</label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 focus:border-primary/50 focus:outline-none focus:bg-primary/20 transition-all placeholder-slate-500'
                    placeholder='Project inquiry'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2'>Message</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    className='w-full px-4 py-3 rounded-lg bg-primary/10 border border-primary/20 focus:border-primary/50 focus:outline-none focus:bg-primary/20 transition-all placeholder-slate-500 resize-none'
                    placeholder='Tell me about your project...'
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type='submit'
                  className='w-full px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all'
                >
                  <FiSend /> Send Message
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center'
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact