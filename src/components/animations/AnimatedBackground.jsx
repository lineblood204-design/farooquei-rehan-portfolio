import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      <svg className='w-full h-full opacity-30' preserveAspectRatio='xMidYMid slice' viewBox='0 0 1200 800'>
        <defs>
          <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#6d28d9' stopOpacity='0.6' />
            <stop offset='100%' stopColor='#06b6d4' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient id='gradient2' x1='0%' y1='100%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#06b6d4' stopOpacity='0.4' />
            <stop offset='100%' stopColor='#6d28d9' stopOpacity='0.5' />
          </linearGradient>
          <filter id='glow'>
            <feGaussianBlur stdDeviation='3' result='coloredBlur' />
            <feMerge>
              <feMergeNode in='coloredBlur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <motion.circle cx='150' cy='200' r='80' fill='url(#gradient1)' filter='url(#glow)' animate={{cx: [150, 250, 150], cy: [200, 300, 200]}} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle cx='1000' cy='600' r='100' fill='url(#gradient2)' filter='url(#glow)' animate={{cx: [1000, 850, 1000], cy: [600, 450, 600]}} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.line x1='150' y1='200' x2='1000' y2='600' stroke='url(#gradient1)' strokeWidth='2' strokeDasharray='1000' animate={{strokeDashoffset: [1000, 0, 1000], opacity: [0.2, 0.6, 0.2]}} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.polygon points='300,100 400,50 450,150 350,200' fill='none' stroke='url(#gradient2)' strokeWidth='2' filter='url(#glow)' animate={{rotate: [0, 360], opacity: [0.3, 0.8, 0.3]}} transition={{ duration: 20, repeat: Infinity }} />
        <motion.polygon points='800,400 900,350 950,450 850,500' fill='none' stroke='url(#gradient1)' strokeWidth='2' filter='url(#glow)' animate={{rotate: [360, 0], opacity: [0.3, 0.7, 0.3]}} transition={{ duration: 25, repeat: Infinity }} />
      </svg>
      <motion.div className='absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent' animate={{opacity: [0.2, 0.4, 0.2]}} transition={{ duration: 8, repeat: Infinity }} />
    </div>
  )
}

export default AnimatedBackground