import { useState, useEffect } from 'react'

export default function PortfolioSection() {
  const [page, setPage] = useState(0)
  const [slideClass, setSlideClass] = useState('opacity-100 translate-x-0')
  const [projectsPerPage, setProjectsPerPage] = useState(3)
  
  // Responsive projects per page
  const getProjectsPerPage = () => {
    if (typeof window === 'undefined') return 3
    return window.innerWidth < 640 ? 1 : 3
  }
  
  // Update projects per page on resize
  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(getProjectsPerPage())
    }
    
    updateProjectsPerPage()
    window.addEventListener('resize', updateProjectsPerPage)
    return () => window.removeEventListener('resize', updateProjectsPerPage)
  }, [])
  
  const PER_PAGE = projectsPerPage
  const CONTAINER_HEIGHT_PX = projectsPerPage === 1 ? 450 : 420

  const projects = [
    { 
      img: '/images/myProjects/movieGPT.png', 
      title: 'MovieGPT - AI-Powered Movie Discovery', 
      desc: 'AI-powered streaming app that gives personalized movie/series suggestions with trailers, multi-language support, and Firebase auth.', 
      link: 'https://github.com/sbmraj03/MovieGPT',
      live: 'https://movienest-7063b.web.app/',
      tags: ['React', 'Redux Toolkit', 'Tailwind', 'Firebase', 'TMDB', 'Gemini AI']
    },
    { 
      img: '/images/myProjects/eduverse.png', 
      title: 'Eduverse-Edtech Platform', 
      desc: 'A comprehensive platform enabling users to create, access, and evaluate educational materials.', 
      link: 'https://github.com/sbmraj03/EduVerse-An-Edtech-Platform',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    { 
      img: '/images/myProjects/chatvox.png', 
      title: 'ChatVox', 
      desc: 'Full-stack chat application with real-time communication and secure data storage.', 
      link: 'https://github.com/sbmraj03/ChatVox',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB']
    },
    { 
      img: '/images/myProjects/dev-detective.png', 
      title: 'Dev Detective', 
      desc: 'A web application that fetches and displays GitHub user details, including repositories, followers, and activity statistics.', 
      link: 'https://github.com/sbmraj03/devDetective',
      tags: ['React', 'GitHub API', 'JavaScript', 'CSS']
    },
    { 
      img: '/images/myProjects/weather.png', 
      title: 'Weather-App', 
      desc: 'A web app that provides users with current weather highlights and a 7-day forecast for any city.', 
      link: 'https://github.com/sbmraj03/Weather-App',
      tags: ['React', 'API', 'JavaScript', 'CSS']
    },
    { 
      img: '/images/myProjects/tic-tac-toe.png', 
      title: 'Tic-Tac-Toe Game', 
      desc: 'A simple two-player game played on a 3x3 grid, where players alternately place their symbols (X or O) with the goal of getting three in a row.', 
      link: 'https://github.com/sbmraj03/tic-tac-toe',
      tags: ['JavaScript', 'HTML', 'CSS', 'Game']
    },
  ]

  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const start = page * PER_PAGE
  const visible = projects.slice(start, start + PER_PAGE)

  const truncate = (text, max) => (text.length > max ? text.slice(0, max - 1) + '…' : text)

  const goToPage = (newPage, dir) => {
    if (newPage === page) return
    setSlideClass(`opacity-0 ${dir > 0 ? '-translate-x-6' : 'translate-x-6'}`)
    setTimeout(() => {
      setPage(newPage)
      setSlideClass(`opacity-0 ${dir > 0 ? 'translate-x-6' : '-translate-x-6'}`)
      requestAnimationFrame(() => {
        setTimeout(() => setSlideClass('opacity-100 translate-x-0'), 0)
      })
    }, 150)
  }

  return (
    <div id="portfolio" className="py-12 sm:py-15">
      <div className="px-[5%] sm:px-[8%] md:px-[10%]">
        <h1 className="text-[32px] sm:text-[48px] md:text-[60px] font-bold text-white mb-8 sm:mb-12 md:mb-16">My Projects</h1>
        <div className="relative max-w-7xl mx-auto">
          {/* Responsive grid: 1 column on mobile, 3 on sm+ */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-300 overflow-hidden ${slideClass}`} style={{height: `${CONTAINER_HEIGHT_PX}px`}}>
            {visible.map((project) => (
              <div key={project.title} className="group relative bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-40 sm:h-40 md:h-48 object-cover bg-[#0d0d0d] transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 sm:p-4">
                  <h3 className="text-lg sm:text-lg font-bold text-white mb-3 group-hover:text-[#ff004f] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {truncate(project.desc, projectsPerPage === 1 ? 120 : 120)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, projectsPerPage === 1 ? 4 : 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-[#ff004f]/20 text-[#ff004f] text-xs rounded-full border border-[#ff004f]/30">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > (projectsPerPage === 1 ? 4 : 3) && (
                      <span className="px-2 py-1 text-xs text-white/70">+{project.tags.length - (projectsPerPage === 1 ? 4 : 3)} more</span>
                    )}
                  </div>
                  
                  <div className="flex flex-row items-center gap-3">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-all duration-300 hover:scale-105 text-sm font-medium"
                      >
                        <i className="fas fa-play text-xs"></i>
                        <span>Live</span>
                      </a>
                    )}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#ff004f] text-white rounded-md hover:bg-[#ff1f66] transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      <span>Code</span>
                      <i className="fas fa-external-link-alt text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                aria-label="Previous projects"
                onClick={() => goToPage(Math.max(0, page - 1), -1)}
                disabled={page === 0}
                className={`rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#ff004f] text-white shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm ${page === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="text-[10px] sm:text-xs text-white/70">{page + 1} / {totalPages}</span>
              <button
                aria-label="Next projects"
                onClick={() => goToPage(Math.min(totalPages - 1, page + 1), 1)}
                disabled={page >= totalPages - 1}
                className={`rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#ff004f] text-white shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm ${page >= totalPages - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
