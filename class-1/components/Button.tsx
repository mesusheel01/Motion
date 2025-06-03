import React from 'react'
import {motion} from 'motion/react'

export default function Button() {
  return (
    <div className='[perspective::1000px] [transform-style:preserve-3d] flex justify-center items-center min-h-screen'
        style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.5) 0.5px, transparent 0)`,
            backgroundSize:"8px 8px",
            backgroundRepeat:"repeat"
        }}
    >
      <motion.button
      whileHover={{
        rotateX:35,
        rotateY:20,
      }}
      style={{
        translateZ:100
      }}
      className='group relative text-xl text-neutral-500 bg-black px-8 py-4 rounded-xl shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'>
        Click me!
        <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm'></span>
      </motion.button>
    </div>
  )
}
