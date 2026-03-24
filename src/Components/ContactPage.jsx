import { useState, useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { axiosInstance } from "../lib/axios";
import toast, { CheckmarkIcon } from "react-hot-toast";

const ContactPage = () => {

    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const textareaRef = useRef(null);
    const [sent, setSent] = useState(false);

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
        setLoading(true);
        try{
            await axiosInstance.post("/send", contactForm);
            setSent(true);
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
            toast.error(error.response?.data?.message || "Unable to send message.");
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <Motion.div 
            className='rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.45)] sm:p-8'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.35, ease: "easeOut"}}>
            {sent? (
                <div className='flex justify-center items-center'>
                    <CheckmarkIcon className='mr-2 size-4'/>
                    <h2 className='text-center text-xl font-extrabold text-white sm:text-2xl'>Message sent. I will get back to you soon.</h2>
                </div>
            ):
            loading? (
               <div className='flex items-center justify-center'>
                    <p className='text-sm font-bold uppercase tracking-wider text-neutral-300 animate-pulse'>Sending...</p>
                </div> 
            ):
            (                
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-bold uppercase tracking-wide text-neutral-300'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            placeholder='John Doe'
                            className='mt-2 block w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none'
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm font-bold uppercase tracking-wide text-neutral-300'>
                            Email
                        </label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='johndoe@gmail.com'
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            className='mt-2 block w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none'
                        />
                    </div>
                    <div>
                        <label htmlFor='message' className='block text-sm font-bold uppercase tracking-wide text-neutral-300'>
                            Message
                        </label>
                        <textarea
                            ref={textareaRef}
                            id='message'
                            name='message'
                            rows='3'
                            value={contactForm.message}
                            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                            className='mt-2 block w-full resize-none rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none'
                            style={{ minHeight: '80px', overflow: 'hidden' }}
                        />
                    </div>
                    <div className='flex justify-center pt-2'>
                        <button
                            type='submit'
                            className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-neutral-200 disabled:opacity-50'
                        >
                            Send Message
                        </button>

                    </div>
                </form>

)}
        </Motion.div>

    )
}

export default ContactPage
