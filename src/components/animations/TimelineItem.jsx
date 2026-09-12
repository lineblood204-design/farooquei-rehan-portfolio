import { motion } from 'framer-motion'

const TimelineItem = ({ item, index, isLeft = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex gap-8 mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div whileHover={{ scale: 1.02 }} className='p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all'>
          <h3 className='text-xl font-bold mb-2'>{item.role}</h3>
          <p className='text-accent text-sm font-semibold mb-2'>{item.company}</p>
          <p className='text-slate-400 text-sm mb-3'>{item.duration}</p>
          <p className='text-slate-300 text-sm'>{item.description}</p>
        </motion.div>
      </div>
      <div className='flex flex-col items-center'>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className='w-4 h-4 rounded-full bg-accent border-4 border-dark box-content' />
        <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className='w-1 h-20 bg-gradient-to-b from-accent to-primary origin-top' />
      </div>
      <div className='flex-1' />
    </motion.div>
  )
}

export default TimelineItem