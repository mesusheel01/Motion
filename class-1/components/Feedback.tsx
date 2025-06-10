'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'

export const Feedback = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex justify-center items-center h-screen'>
        {!isOpen && (
        <motion.button 
        onClick={() => setIsOpen(prev => !prev)}
        className='bg-neutral-300 text-neutral-900 border-1 border-neutral-900 px-4 py-2 rounded-md w-60 h-10'>
            Feedback do!
        </motion.button>
        )}
        {
            isOpen && (
                <motion.textarea
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                placeholder='Write your feedback here...'
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='bg-neutral-300 text-neutral-900 border-1 border-neutral-900 px-4 py-2 rounded-md w-82 h-52'>
                    
                </motion.textarea>
        )}
    </div>
  )
}
