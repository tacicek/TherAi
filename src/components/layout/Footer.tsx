import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0D0B26] dark:bg-[#0D0B26] light:bg-gray-900 text-white border-t border-white/10 dark:border-white/10 light:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/Thera-AI-Logo-1.png" 
                alt="Ther-AI Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-400 mb-6 max-w-md leading-relaxed">
              Revolutionizing healthcare through cutting-edge artificial intelligence solutions. 
              Empowering medical professionals with advanced diagnostic tools for better patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">Cancer Detection</Link></li>
              <li><Link href="/projects" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">Radiology AI</Link></li>
              <li><Link href="/projects" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">Pathology Analysis</Link></li>
              <li><Link href="/projects" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">Clinical Decision Support</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link href="/news" className="text-gray-400 dark:text-gray-400 light:text-gray-400 hover:text-white transition-colors duration-200">News & Updates</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 dark:border-white/10 light:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Ther-AI. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400 dark:text-gray-400 light:text-gray-400">
              <span>🏥 Trusted by 50+ Healthcare Institutions</span>
              <span>🔒 HIPAA Compliant</span>
              <span>🌍 Global Impact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}