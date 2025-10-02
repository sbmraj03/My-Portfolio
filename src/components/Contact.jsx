import { useRef, useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('') // '', 'success', 'error'
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef(null)
  const submitURL = 'https://formsubmit.co/ajax/sbmraj03@gmail.com'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const formData = new FormData(form)
    const payload = {
      name: formData.get('Name'),
      email: formData.get('Email'),
      message: formData.get('Message'),
      _subject: 'New message from Portfolio contact form',
      _template: 'table',
    }
    try {
      setIsSending(true)
      setStatus('')
      const res = await fetch(submitURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setTimeout(() => setStatus(''), 5000)
      form.reset()
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
    finally { setIsSending(false) }
  }

  return (
    <div id="contact" className="py-10 sm:py-12">
      <div className="px-[5%] sm:px-[8%] md:px-[10%]">
        <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10 items-start">
          {/* Contact Info Section */}
          <div className="w-full md:w-[35%]">
            <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-white mb-6 sm:mb-8">Contact Me</h1>
            <div className="space-y-4 sm:space-y-5">
              <p className="flex items-center font-semibold text-sm sm:text-base">
                <i className="fa-solid fa-envelope text-[#ff004f] mr-3 sm:mr-4 text-lg sm:text-[22px]"></i> 
                sbmraj03@gmail.com
              </p>
              <p className="flex items-center font-semibold text-sm sm:text-base">
                <i className="fa-solid fa-phone text-[#ff004f] mr-3 sm:mr-4 text-lg sm:text-[22px]"></i> 
                6201709874
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 sm:mt-7 flex gap-4 sm:gap-6">
              <a href="https://www.linkedin.com/in/shubham-kumar-080852248/" className="text-[24px] sm:text-[28px] md:text-[30px] text-[#ababab] inline-block hover:text-[#ff004f] hover:-translate-y-1 transition" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/sbmraj03" className="text-[24px] sm:text-[28px] md:text-[30px] text-[#ababab] inline-block hover:text-[#ff004f] hover:-translate-y-1 transition" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-[24px] sm:text-[28px] md:text-[30px] text-[#ababab] inline-block hover:text-[#ff004f] hover:-translate-y-1 transition" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
            {/* Download CV Button */}
            <a href="/images/my-cv.pdf" download className="block mt-8 sm:mt-10 md:mt-12 border border-[#ff004f] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-md text-white bg-[#ff004f] hover:bg-[#ff0051be] w-fit text-sm sm:text-base">
              Download CV
            </a>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-[60%]">
            <form ref={formRef} onSubmit={onSubmit} className="w-full">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <input 
                  type="text" 
                  name="Name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full bg-[#262626] text-white rounded-md p-3 sm:p-4 outline-none text-sm sm:text-base" 
                />
                <input 
                  type="email" 
                  name="Email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-[#262626] text-white rounded-md p-3 sm:p-4 outline-none text-sm sm:text-base" 
                />
                <textarea 
                  name="Message" 
                  rows={5} 
                  placeholder="Your Message" 
                  className="w-full bg-[#262626] text-white rounded-md p-3 sm:p-4 outline-none text-sm sm:text-base resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSending} 
                className={`inline-flex items-center gap-2 bg-[#ff004f] hover:bg-[#ff0051a4] hover:cursor-pointer px-6 sm:px-8 py-2.5 sm:py-3 rounded-md mt-4 sm:mt-5 disabled:opacity-60 text-sm sm:text-base`}
              >
                {isSending ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i> 
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-3 rounded-md bg-green-600/20 text-green-400 border border-green-600/30 text-sm sm:text-base">
                Message sent successfully
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-3 rounded-md bg-red-600/20 text-red-400 border border-red-600/30 text-sm sm:text-base">
                Failed to send. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
