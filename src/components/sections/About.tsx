import Image from 'next/image'

export default function About() {
  return (
    <>
      {/* About Ther-AI Section */}
      <section className="py-24 bg-white light:bg-gray-50 dark:bg-[#1a1640]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                  alt="AI Technology and Data Analysis"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-300 light:text-blue-700 dark:text-blue-300">AI Processing</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-green-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30">
                <div className="text-sm text-green-300 light:text-green-700 dark:text-green-300">
                  <span className="font-bold">95%</span> Accuracy
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-blue-600 light:text-blue-700 dark:text-blue-400 uppercase tracking-wide">
                About Ther-AI
              </h3>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 light:text-gray-900 dark:text-white leading-tight">
                Artificial Intelligence for Healthcare
              </h2>
              
              <p className="text-lg text-gray-600 light:text-gray-600 dark:text-gray-300 leading-relaxed">
                Ther-AI LLC is an innovative R&D company at the forefront of healthcare transformation, specializing in developing transparent and trustworthy AI solutions for critical medical challenges. Our mission extends beyond technology development—we aim to fundamentally improve global health outcomes through cutting-edge artificial intelligence applications. Our multidisciplinary team brings together world-class expertise in radiology, ophthalmology, radiation oncology, gastroenterology, neonatology, electronic engineering, and medical AI, complemented by successful medical technology entrepreneurs. This unique combination of clinical insight, technical innovation, and commercial experience positions us ideally to develop and deliver transformative solutions for various healthcare problems worldwide.
              </p>
              
              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 light:bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600 light:text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 light:text-gray-700 dark:text-gray-300 font-medium">Transparent AI Solutions</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 light:bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600 light:text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 light:text-gray-700 dark:text-gray-300 font-medium">Multidisciplinary Expertise</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 light:bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600 light:text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 light:text-gray-700 dark:text-gray-300 font-medium">Global Health Impact</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 light:bg-orange-100 dark:bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600 light:text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 light:text-gray-700 dark:text-gray-300 font-medium">Clinical Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features Section */}
      <section className="py-24 bg-[#0D0B26] dark:bg-[#0D0B26] light:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 text-blue-300 dark:text-blue-300 light:text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-500/30 dark:border-blue-500/30 light:border-blue-200">
              🔬 Advanced AI Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              Leading the Future of Medical AI
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We develop cutting-edge artificial intelligence solutions that transform how healthcare 
              professionals diagnose, treat, and care for patients across the globe.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* AI-Powered Diagnostics */}
            <div className="group p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gradient-to-br light:from-blue-50 light:to-blue-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:from-blue-100 light:hover:to-blue-200 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4">AI-Powered Diagnostics</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                Revolutionary diagnostic tools that analyze medical imaging with superhuman accuracy, 
                detecting conditions earlier than traditional methods.
              </p>
            </div>
            
            {/* Clinical Integration */}
            <div className="group p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gradient-to-br light:from-green-50 light:to-green-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:from-green-100 light:hover:to-green-200 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Clinical Integration</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                Seamlessly integrate with existing hospital systems and workflows, 
                ensuring minimal disruption while maximizing clinical impact.
              </p>
            </div>
            
            {/* Real-time Analysis */}
            <div className="group p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-gradient-to-br light:from-purple-50 light:to-purple-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:from-purple-100 light:hover:to-purple-200 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Real-time Analysis</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                Instant processing and analysis of medical data, providing healthcare professionals 
                with immediate insights for faster decision-making.
              </p>
            </div>
          </div>
          
          {/* Technology Showcase */}
          <div className="bg-white/5 dark:bg-white/5 light:bg-gradient-to-r light:from-gray-50 light:to-gray-100 rounded-3xl p-12 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
                  Powered by Advanced AI Technology
                </h3>
                <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 leading-relaxed">
                  Our proprietary AI models are trained on millions of medical images and validated 
                  across multiple healthcare institutions worldwide, ensuring clinical-grade accuracy.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400 dark:text-blue-400 light:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">Deep Learning Neural Networks</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 dark:bg-green-500/20 light:bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400 dark:text-green-400 light:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">HIPAA-Compliant Processing</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400 dark:text-purple-400 light:text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">Real-time Cloud Processing</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 dark:bg-white/10 light:bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-600">Processing Status</span>
                      <span className="text-sm font-bold text-green-400 dark:text-green-400 light:text-green-600">Active</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Image Analysis: Complete</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Pattern Recognition: 98.7%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Risk Assessment: Low</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-gray-100">
                      <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-500">Processed in 0.3 seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}