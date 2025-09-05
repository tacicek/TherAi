export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-blue-400">
          Ther-AI
        </h1>
        <p className="text-2xl text-gray-300">
          Healthcare AI Solutions
        </p>
        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Revolutionary artificial intelligence for medical diagnostics and patient care. 
          Transforming healthcare through cutting-edge AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  )
}