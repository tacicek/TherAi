'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would integrate with your contact form service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        interest: '',
        message: ''
      })
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1640] via-[#0D0B26] to-[#1a1640] dark:from-[#1a1640] dark:via-[#0D0B26] dark:to-[#1a1640] light:from-blue-900 light:via-purple-900 light:to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20 dark:border-white/20 light:border-white/20">
            🚀 Ready to Transform Healthcare?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-xl text-blue-200 dark:text-blue-200 light:text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Get in touch to learn how our AI solutions can enhance your healthcare practice 
            and improve patient outcomes. Join the healthcare revolution today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20 dark:border-white/20 light:border-white/20">
                    <svg className="w-6 h-6 text-blue-300 dark:text-blue-300 light:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-blue-200 dark:text-blue-200 light:text-blue-200">+1 (555) 123-4567</p>
                    <p className="text-sm text-blue-300 dark:text-blue-300 light:text-blue-300 mt-1">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20 dark:border-white/20 light:border-white/20">
                    <svg className="w-6 h-6 text-blue-300 dark:text-blue-300 light:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-blue-200 dark:text-blue-200 light:text-blue-200">contact@ther-ai.com</p>
                    <p className="text-sm text-blue-300 dark:text-blue-300 light:text-blue-300 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20 dark:border-white/20 light:border-white/20">
                    <svg className="w-6 h-6 text-blue-300 dark:text-blue-300 light:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Headquarters</h4>
                    <p className="text-blue-200 dark:text-blue-200 light:text-blue-200">San Francisco, CA</p>
                    <p className="text-sm text-blue-300 dark:text-blue-300 light:text-blue-300 mt-1">Silicon Valley Innovation Hub</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="bg-white/5 dark:bg-white/5 light:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-white/10 light:border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Trusted by Leading Institutions</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-blue-200 dark:text-blue-200 light:text-blue-200">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400 dark:text-green-400 light:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400 dark:text-green-400 light:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>FDA Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400 dark:text-green-400 light:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-400 dark:text-green-400 light:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SOC 2 Type II</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/20 light:border-white/20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-white/20 rounded-xl text-white placeholder-blue-200 dark:placeholder-blue-200 light:placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-white/20 rounded-xl text-white placeholder-blue-200 dark:placeholder-blue-200 light:placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-white/20 rounded-xl text-white placeholder-blue-200 dark:placeholder-blue-200 light:placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@hospital.com"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-white mb-2">
                  Healthcare Organization
                </label>
                <input 
                  type="text" 
                  id="organization" 
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-white/20 rounded-xl text-white placeholder-blue-200 dark:placeholder-blue-200 light:placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="Your hospital or clinic name"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-white mb-2">
                  Area of Interest
                </label>
                <select 
                  id="interest" 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="" className="text-gray-900 bg-white">Select an area</option>
                  <option value="oncology" className="text-gray-900 bg-white">Oncology AI</option>
                  <option value="radiology" className="text-gray-900 bg-white">Radiology AI</option>
                  <option value="pathology" className="text-gray-900 bg-white">Pathology AI</option>
                  <option value="general" className="text-gray-900 bg-white">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-white/20 rounded-xl text-white placeholder-blue-200 dark:placeholder-blue-200 light:placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your healthcare AI needs and how we can help transform your practice..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
              
              {/* Success/Error Messages */}
              {submitMessage && (
                <div className={`p-4 rounded-xl text-center font-medium ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}