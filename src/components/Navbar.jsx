import { useState } from 'react'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' },
  ]

  return (
    <nav className='fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-primary/20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
            FR
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                className='cursor-pointer hover:text-accent transition-colors text-sm font-medium'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className='flex items-center space-x-4'>
            <button
              onClick={() => setIsDark(!isDark)}
              className='p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors'
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors'
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden pb-4 space-y-2'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className='block px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer text-sm font-medium'
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar