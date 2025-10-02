import { useState, useEffect } from 'react'

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [page, setPage] = useState(0)
  const [slideClass, setSlideClass] = useState('opacity-100 translate-x-0')
  
  const skillCategories = [
    ['C', '/images/skills/c.png'],
    ['C++', '/images/skills/cpp.png'],
    ['Python', '/images/skills/python.png'],
    ['Java', '/images/skills/java.png'],
    ['JavaScript', '/images/skills/js.png'],
    ['TypeScript', '/images/skills/typescript.png'],
    ['React', '/images/skills/react.png'],
    ['Next.js', '/images/skills/nextjs.png'],
    ['Redux', '/images/skills/redux.png'],
    ['HTML5', '/images/skills/html.png'],
    ['CSS3', '/images/skills/css.png'],
    ['Tailwind', '/images/skills/tailwind.png'],
    ['Node.js', '/images/skills/nodejs.png'],
    ['Express.js', '/images/skills/express.png'],
    ['FastAPI', '/images/skills/fastAPI.png'],
    ['Socket.io', '/images/skills/socket.io.png'],
    ['REST API', '/images/skills/restAPI.png'],
    ['GraphQL', '/images/skills/graphql.png'],
    ['MongoDB', '/images/skills/mongodb.png'],
    ['MySQL', '/images/skills/mysql.png'],
    ['PostgreSQL', '/images/skills/postgresql.png'],
    ['SQLite', '/images/skills/sqlite.png'],
    ['Redis', '/images/skills/redis.png'],
    ['SQL', '/images/skills/sql.png'],
    ['Git', '/images/skills/git.png'],
    ['GitHub', '/images/skills/github.png'],
    ['Postman', '/images/skills/postman.png'],
    ['Auth0', '/images/skills/auth0.png'],
    ['Prisma ORM', '/images/skills/prismaORM.png'],
    ['Pandas', '/images/skills/pandas.png'],
    ['Numpy', '/images/skills/numpy.png'],
    ['Seaborn', '/images/skills/seaborn.png'],
    ['Matplotlib', '/images/skills/matplot.png'],
  ]
  
  // Responsive configuration
  const getResponsiveConfig = () => {
    if (typeof window === 'undefined') return { itemsPerRow: 6, rowsPerPage: 5, cardHeight: 80, rowGap: 24 }
    
    const width = window.innerWidth
    if (width < 640) { // mobile
      return { itemsPerRow: 2, rowsPerPage: 5, cardHeight: 85, rowGap: 20 }
    } else if (width < 768) { // sm
      return { itemsPerRow: 3, rowsPerPage: 5, cardHeight: 85, rowGap: 22 }
    } else if (width < 1024) { // md
      return { itemsPerRow: 4, rowsPerPage: 5, cardHeight: 82, rowGap: 22 }
    } else if (width < 1280) { // lg
      return { itemsPerRow: 5, rowsPerPage: 5, cardHeight: 80, rowGap: 24 }
    } else { // xl
      return { itemsPerRow: 6, rowsPerPage: 5, cardHeight: 80, rowGap: 24 }
    }
  }
  
  const [config, setConfig] = useState(getResponsiveConfig())
  const { itemsPerRow: ITEMS_PER_ROW, rowsPerPage: ROWS_PER_PAGE, cardHeight: CARD_HEIGHT_PX, rowGap: ROW_GAP_PX } = config
  
  const ITEMS_PER_PAGE = ITEMS_PER_ROW * ROWS_PER_PAGE
  const totalPages = Math.ceil(skillCategories.length / ITEMS_PER_PAGE)

  // Update config on resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setConfig(getResponsiveConfig())
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getVisibleSkills = () => {
    const start = page * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return skillCategories.slice(start, end)
  }

  const goToPage = (newPage, dir) => {
    if (newPage === page) return
    // animate out
    setSlideClass(`opacity-0 ${dir > 0 ? '-translate-x-6' : 'translate-x-6'}`)
    setTimeout(() => {
      setPage(newPage)
      // set entering position
      setSlideClass(`opacity-0 ${dir > 0 ? 'translate-x-6' : '-translate-x-6'}`)
      requestAnimationFrame(() => {
        setTimeout(() => setSlideClass('opacity-100 translate-x-0'), 0)
      })
    }, 150)
  }

  const chunkArray = (array, chunkSize) => {
    const chunks = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
  }

  return (
    <div id="skills" className="py-8 sm:py-10 md:py-12">
      <div className="px-[5%] sm:px-[8%] md:px-[10%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold sm:font-extrabold text-white pb-2">Technical Skills</h1>
        <section className="bg-white/20 max-w-[1200px] mx-4 px-3 sm:px-4 md:px-5 rounded-[10px] relative">
          <div className="py-15 sm:py-5 mx-14 sm:md:mx-38" style={{height: `${ROWS_PER_PAGE * CARD_HEIGHT_PX + ROWS_PER_PAGE * ROW_GAP_PX}px`}}>
            {chunkArray(getVisibleSkills(), ITEMS_PER_ROW).map((row, rowIndex) => (
              <div key={rowIndex} className={`flex justify-start mb-4 sm:mb-5 md:mb-6 transition-all duration-300 ${slideClass}`}>
                <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {row.map(([name, src]) => (
                    <div key={name} className="flex flex-col items-center justify-center bg-white text-[#333] p-2 sm:p-2.5 md:p-3 rounded-[8px] shadow hover:-translate-y-2 hover:shadow-xl hover:scale-105 transition-all duration-300 w-[80px] sm:w-[95px] md:w-[110px] lg:w-[120px] h-[60px] sm:h-[65px] md:h-[68px] lg:h-[70px] group">
                      <img src={src} alt={name} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-0.5 sm:mb-1 object-fill group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium sm:font-semibold text-center group-hover:text-[#ff004f] transition-colors duration-300">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <>
              <button
                aria-label="Previous skills"
                onClick={() => goToPage(Math.max(0, page - 1), -1)}
                disabled={page === 0}
                className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#ff004f] text-white shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm ${page === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                aria-label="Next skills"
                onClick={() => goToPage(Math.min(totalPages - 1, page + 1), 1)}
                disabled={page >= totalPages - 1}
                className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#ff004f] text-white shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm ${page >= totalPages - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-white/70">
                {page + 1} / {totalPages}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}