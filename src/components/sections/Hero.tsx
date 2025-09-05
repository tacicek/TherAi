import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0B26] light:bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 light:opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <span className="inline-block bg-blue-500/20 light:bg-blue-100 text-blue-300 light:text-blue-800 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-500/30 light:border-blue-200">
                🚀 Next-Generation Healthcare AI
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white light:text-gray-900 leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Trustworthy Medical AI
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 light:text-gray-600 mb-12 leading-relaxed">
              Smart, reliable, and accurate solutions for healthcare problems spanning from cancer therapy to surgery/treatment planning and outcome prediction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="/projects" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Discover More
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <Image 
                src="/ai_illustration.webp" 
                alt="AI Healthcare Technology Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-300 light:text-blue-700">AI Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-sm text-green-300 light:text-green-700">
                  <span className="font-bold">Healthcare</span> Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}