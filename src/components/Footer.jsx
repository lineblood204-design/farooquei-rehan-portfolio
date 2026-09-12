import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/farooquei-rehan' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/farooquei-rehan' },
    { label: 'Twitter', href: 'https://twitter.com/farooquei_rehan' }
  ]

  return (
    <footer className='bg-darker border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='grid md:grid-cols-4 gap-8 mb-12'
        >
          {/* Brand */}
          <div>
            <div className='text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4'>
              FR
            </div>
            <p className='text-slate-400 text-sm leading-relaxed'>
              Building beautiful, scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-bold text-lg mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className='text-slate-400 hover:text-accent transition-colors text-sm'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='font-bold text-lg mb-4'>Social</h4>
            <ul className='space-y-2'>
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-400 hover:text-accent transition-colors text-sm'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className='font-bold text-lg mb-4'>Stay Updated</h4>
            <p className='text-slate-400 text-sm mb-4'>
              Subscribe for updates on new projects and insights.
            </p>
            <form className='flex'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-1 px-4 py-2 rounded-l-lg bg-primary/10 border border-primary/20 focus:outline-none text-sm placeholder-slate-500'
              />
              <button
                type='submit'
                className='px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-r-lg font-semibold text-sm hover:shadow-lg transition-all'
              >
                Join
              </button>
            </form>
          </div>
        </motion.div>

        {/* Divider */}
        <div className='border-t border-primary/20 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-slate-400 text-sm'>
              © {currentYear} Farooquei Rehan. All rights reserved.
            </p>
            <div className='flex gap-6 mt-4 md:mt-0'>
              <a href='#' className='text-slate-400 hover:text-accent transition-colors text-sm'>
                Privacy Policy
              </a>
              <a href='#' className='text-slate-400 hover:text-accent transition-colors text-sm'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer