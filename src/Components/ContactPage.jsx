import React from 'react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <motion.div 
			className='border border-gray-50 dark:border-gray-900 shadow-lg rounded-lg p-8 mb-8 max-w-2xl mx-auto'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}>
      
			<form className='space-y-4'>
				<div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-50 dark:text-gray-900 '>
					  Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
            placeholder='John Doe'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
						 px-3 text-white focus:outline-none focus:ring-2
						'
					/>
				</div>
				<div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-50 dark:text-gray-900'>
					  Email
					</label>
					<input
						type='text'
						id='email'
						name='email'
            placeholder='johndoe@gmail.com'
						className='mt-1 block w-full bg-gray-700 border border-gray-900 rounded-md shadow-sm py-2
						 px-3 text-white focus:outline-none focus:ring-2
						'
					/>
				</div>
				<div>
					<label htmlFor='message' className='block text-sm font-medium text-gray-50 dark:text-gray-900'>
						Message
					</label>
					<textarea
						id='description'
						name='description'
						rows='3'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-white focus:outline-none focus:ring-2 '
					/>
				</div>
				<div className='flex justify-center'>
					<button
						type='submit'
						className='max-w-md flex justify-center items-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-gray-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
					>
          	Send me a message    
					</button>
	
				</div>
		</form>
    </motion.div>
 
  )
}

export default ContactPage 
