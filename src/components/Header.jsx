import useTypewriter from '../hooks/useTypewriter'
import { useMemo } from 'react'

export default function Header({ onOpenMenu }) {
  const text = useTypewriter(useMemo(() => ['Problem Solving', 'Web Development'], []))
  
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <div id="header" className="w-full px-[5%] sm:px-[8%] md:px-[10%] h-screen bg-[url('/images/phone-bg.png')] sm:md:bg-[url('/images/bg.png')] bg-cover md:bg- bg-[position:70%_center] bg-fixed">
      <div className="py-2">
        {/* Responsive Navigation */}
        <nav className="flex items-center justify-between flex-wrap">
          {/* Logo - responsive sizing */}
          <img src="/images/logo.png" alt="logo" className="w-[120px] h-[40px] sm:w-[150px] sm:h-[48px] md:w-[180px] md:h-[58px]" />
          
          {/* Desktop Navigation - hidden on mobile, visible on sm+ */}
          <ul id="sidemenu" className="hidden sm:flex gap-1">
            {[
              { href: '#header', label: 'Home', active: true },
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#portfolio', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href} className="list-none inline-block m-[8px_12px] sm:m-[10px_16px] md:m-[10px_20px]">
                <button 
                  onClick={() => scrollToSection(link.href)} 
                  className={`relative text-white no-underline text-[16px] sm:text-[18px] md:text-[22px] font-semibold tracking-wide after:content-[''] after:h-[2px] sm:after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 after:-bottom-[8px] sm:after:-bottom-[10px] after:w-0 hover:after:w-full after:transition-[width] after:duration-300 after:ease-out cursor-pointer bg-transparent border-none ${link.active ? 'after:w-full' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button - visible only on mobile */}
          <div className="sm:hidden">
            <i className="fas fa-bars inline-block text-white text-xl sm:text-2xl" onClick={onOpenMenu}></i>
          </div>
        </nav>
        
        {/* Hero Content - responsive text sizing */}
        <div className="mt-[110%] sm:md:mt-[18%]">
          <h1 className="text-[24px] md:text-[65px] leading-tight font-extrabold">
            Hi There, <br /> I'm Shubham Kumar
          </h1>
          <div className="mt-4 sm:mt-6">
            <p className="inline text-[14px] sm:text-[18px] md:text-[24px] font-normal">I Am Into</p>{' '}
            <p className="inline text-[14px] sm:text-[18px] md:text-[24px] font-bold text-[#ff004f]">{text}</p>
            <span className="inline-block align-middle w-[3px] h-[20px] sm:w-[4px] sm:h-[25px] bg-[#ff004f] ml-1"></span>
          </div>
        </div>
        
        {/* Action Buttons - responsive layout */}
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 gap-[15px] justify-start text-left items-start sm:items-center mt-6 sm:mt-10">
          <div className="flex items-center gap-2 sm:md:gap-4">
            <a href="/images/my-cv.pdf" download className="inline-block border border-[#ff004f] rounded-md px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 bg-[#ff004f] hover:bg-[#ff1f66] transition-colors duration-200 text-sm sm:text-base">
              Download CV
            </a>
            <a href="https://github.com/sbmraj03" target="_blank" rel="noreferrer" className="inline-block transition-transform duration-300 hover:-translate-y-1">
              <i className="fab fa-github text-white sm:md:text-slate-400  text-[40px] sm:text-[50px] md:text-[60px] transition-colors duration-300 hover:text-[#ff004f]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
