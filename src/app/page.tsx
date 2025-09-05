export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ther-AI
        </h1>
        <p className="text-2xl text-blue-200">
          Healthcare AI Solutions
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Revolutionary artificial intelligence for medical diagnostics and patient care
        </p>
      </div>
    </div>
  )
}