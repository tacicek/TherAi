export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "AI-Powered Cancer Detection System",
      description: "Revolutionary early-stage cancer detection using advanced deep learning algorithms",
      category: "Oncology",
      status: "active" as const,
      technologies: ["TensorFlow", "Python", "DICOM", "PyTorch", "Medical Imaging"],
      images: ["https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"],
      results: "95% accuracy in early-stage detection, 40% reduction in false positives",
      slug: "cancer-detection-ai"
    },
    {
      title: "Radiology AI Assistant",
      description: "Intelligent radiology workflow optimization and diagnostic support system",
      category: "Radiology",
      status: "in-progress" as const,
      technologies: ["Vue.js", "FastAPI", "PostgreSQL", "DICOM", "HL7 FHIR"],
      images: ["https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"],
      results: "30% reduction in report turnaround time, 25% improvement in diagnostic confidence",
      slug: "radiology-assistant"
    },
    {
      title: "Digital Pathology Platform",
      description: "AI-enhanced digital pathology platform for automated tissue analysis",
      category: "Pathology",
      status: "completed" as const,
      technologies: ["React", "Node.js", "OpenSeadragon", "Python", "Computer Vision"],
      images: ["https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg"],
      results: "Deployed at 8 medical centers, 50% faster pathology reporting",
      slug: "pathology-digitization"
    }
  ]

  const statusColors = {
    'active': 'bg-green-500/20 text-green-300 border-green-500/30 dark:bg-green-500/20 dark:text-green-300 dark:border-green-500/30 light:bg-green-100 light:text-green-800 light:border-green-200',
    'completed': 'bg-blue-500/20 text-blue-300 border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30 light:bg-blue-100 light:text-blue-800 light:border-blue-200',
    'in-progress': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30 dark:bg-yellow-500/20 dark:text-yellow-300 dark:border-yellow-500/30 light:bg-yellow-100 light:text-yellow-800 light:border-yellow-200'
  }

  const statusLabels = {
    'active': 'Active',
    'completed': 'Completed', 
    'in-progress': 'In Progress'
  }

  const categoryColors = {
    'Oncology': 'bg-red-500/20 text-red-300 dark:bg-red-500/20 dark:text-red-300 light:bg-red-100 light:text-red-800',
    'Radiology': 'bg-blue-500/20 text-blue-300 dark:bg-blue-500/20 dark:text-blue-300 light:bg-blue-100 light:text-blue-800',
    'Pathology': 'bg-purple-500/20 text-purple-300 dark:bg-purple-500/20 dark:text-purple-300 light:bg-purple-100 light:text-purple-800',
    'Cardiology': 'bg-pink-500/20 text-pink-300 dark:bg-pink-500/20 dark:text-pink-300 light:bg-pink-100 light:text-pink-800',
    'Neurology': 'bg-indigo-500/20 text-indigo-300 dark:bg-indigo-500/20 dark:text-indigo-300 light:bg-indigo-100 light:text-indigo-800',
    'General': 'bg-gray-500/20 text-gray-300 dark:bg-gray-500/20 dark:text-gray-300 light:bg-gray-100 light:text-gray-800'
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1640] via-[#0D0B26] to-[#1a1640] dark:from-[#1a1640] dark:via-[#0D0B26] dark:to-[#1a1640] light:from-gray-50 light:to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-green-500/20 dark:bg-green-500/20 light:bg-green-100 text-green-300 dark:text-green-300 light:text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-green-500/30 dark:border-green-500/30 light:border-green-200">
            🏆 Award-Winning Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
            Breakthrough AI Solutions
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge AI healthcare projects that are transforming medical diagnosis, 
            treatment protocols, and patient care delivery across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="group bg-white/5 dark:bg-white/5 light:bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10 dark:border-white/10 light:border-gray-100 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border ${categoryColors[project.category as keyof typeof categoryColors] || categoryColors['General']}`}>
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${statusColors[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-3 group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  {project.results && (
                    <div className="mb-6 p-4 bg-green-500/10 dark:bg-green-500/10 light:bg-gradient-to-r light:from-green-50 light:to-blue-50 rounded-xl border border-green-500/20 dark:border-green-500/20 light:border-green-100 backdrop-blur-sm">
                      <div className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-green-400 dark:text-green-400 light:text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-green-300 dark:text-green-300 light:text-green-800 text-sm font-semibold mb-1">Key Results:</p>
                          <p className="text-green-400 dark:text-green-400 light:text-green-700 text-sm">{project.results}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="bg-white/10 dark:bg-white/10 light:bg-gray-100 text-gray-300 dark:text-gray-300 light:text-gray-700 px-3 py-1 rounded-lg text-xs font-medium hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-200 transition-colors duration-200 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-200">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-gray-400 dark:text-gray-400 light:text-gray-500 text-xs px-3 py-1 font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <a 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-blue-400 dark:text-blue-400 light:text-blue-600 hover:text-blue-300 dark:hover:text-blue-300 light:hover:text-blue-700 font-semibold transition-all duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Impact Stats */}
        <div className="bg-white/5 dark:bg-white/5 light:bg-white rounded-3xl shadow-xl p-12 mb-12 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Global Impact</h3>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600">Our AI solutions are making a difference worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 dark:text-green-400 light:text-green-600 mb-2">1M+</div>
              <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium">Patients Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 dark:text-purple-400 light:text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium">Diagnostic Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 dark:text-orange-400 light:text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-medium">AI Monitoring</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/projects"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Projects
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}