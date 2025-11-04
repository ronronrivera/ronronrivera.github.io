import React, {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import { axiosInstance } from '../lib/axios'
import { Loader } from 'lucide-react'
import toast from "react-hot-toast"

const ContactPage = () => {
	
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const textareaRef = useRef(null);

	// Function to adjust textarea height
	const adjustTextareaHeight = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};

	// Adjust height when message changes
	useEffect(() => {
		adjustTextareaHeight();
	}, [contactForm.message]);

	const handleSubmit = async (e) =>{
		e.preventDefault();
		setLoading(true)
		try{
			await axiosInstance.post("/send", contactForm);
			toast.success("Message sent successfully!");
			setContactForm({
				name: "",
				email: "",
				message: ""
			})
			// Reset textarea height after form submission
			if (textareaRef.current) {
				textareaRef.current.style.height = 'auto';
			}
		}
		catch(error){
			toast.error(error.response.data.message || "Unable to sent a message");
		}
		finally{
			setLoading(false);
		}
	}

  return (
    <motion.div 
			className='border border-gray-50 dark:border-gray-900 shadow-lg rounded-lg p-8 mb-8 max-w-2xl mx-auto'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}>
      
			<form onSubmit={handleSubmit} className='space-y-2'>
				<div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-50 dark:text-gray-900 '>
					  Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={contactForm.name}
						onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
            placeholder='John Doe'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
						 px-3 text-white focus:outline-none focus:ring-2
						'
					/>
				</div>
				<div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-50 dark:text-gray-900'>
					  Email
					</label>
					<input
						type='text'
						id='email'
						name='email'
            placeholder='johndoe@gmail.com'
						value={contactForm.email}
						onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
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
						ref={textareaRef}
						id='message'
						name='message'
						rows='3'
						value={contactForm.message}
						onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-white focus:outline-none focus:ring-2 resize-none'
						style={{ minHeight: '80px', overflow: 'hidden' }}
					/>
				</div>
				<div className='flex justify-center'>
					<button
						type='submit'
						className='max-w-md flex justify-center items-center py-2 px-4 border border-transparent rounded-md 
						shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-500 active:bg-gray-400
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50'
					>
						{loading? 
							<Loader className='animate-spin'/>
							:
							'Send Message'
						}    
					</button>
	
				</div>
		</form>
    </motion.div>
 
  )
}

export default ContactPage
