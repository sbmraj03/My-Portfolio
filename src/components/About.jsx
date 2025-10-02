import { useState } from 'react'

export default function About() {
  const [tab, setTab] = useState('problem-solving')
  return (
    <div id="about" className="py-12 sm:py-16 md:py-20 text-[#ababab]">
      <div className="px-[5%] sm:px-[8%] md:px-[10%]">
        <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-20">
          {/* Profile Image - responsive sizing */}
          <div className="w-full md:w-[30%]">
            <div className="bg-[#1f1f1f] rounded-[18px] sm:rounded-[20px] md:rounded-[22px]">
              <img src="/images/user.png" alt="user" className="w-full rounded-[14px] sm:rounded-[16px] md:rounded-[18px]" />
            </div>
          </div>
          
          {/* About Content */}
          <div className="w-full md:w-[65%]">
            <h1 className="text-white font-bold sm:font-extrabold leading-tight text-[32px] sm:text-[40px] md:text-[50px]">About Me</h1>
            <p className="font-semibold sm:font-bold text-sm sm:text-base ">
              My name is Shubham Kumar | <span className="text-[#ff004f] font-bold">Final year ETC UG at IIEST, Shibpur.</span><br /><br />
              I'm a web developer passionate about creating user-friendly applications. I enjoy problem-solving and applying data structures and algorithms to improve my programming skills.
            </p>
            {/* Responsive Tabs */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:md:justify-start mt-4 gap-4 sm:gap-0">
              <button onClick={() => setTab('problem-solving')} className={`mr-0  md:mr-12 text-xs sm:text-sm font-bold text-[#f1e8e0] relative pb-2 cursor-pointer ${tab === 'problem-solving' ? 'after:w-full' : 'after:w-0'} after:content-[''] after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 sm:after:left-1/2 sm:after:-translate-x-1/2 after:-bottom-0.5 after:transition-[width] after:duration-300`}>
                Problem-Solving
              </button>
              <button onClick={() => setTab('education')} className={`text-xs sm:text-sm font-bold text-[#f1e8e0] relative pb-2 cursor-pointer ${tab === 'education' ? 'after:w-full' : 'after:w-0'} after:content-[''] after:h-[2px] sm:after:h-[3px] after:bg-[#ff004f] after:absolute after:left-0 sm:after:left-1/2 sm:after:-translate-x-1/2 after:-bottom-[0.0002rem] after:transition-[width] after:duration-300`}>
                Education
              </button>
            </div>
            {/* Problem Solving Tab Content */}
            <div className={`${tab === 'problem-solving' ? 'opacity-100 max-h-[600px] sm:max-h-[500px]' : 'opacity-0 max-h-0'} overflow-hidden transition-all duration-500`}>
              <section className="mt-4 sm:mt-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-shadow-white font-bold">My Coding Profiles</h2>
                <p className="font-bold text-[#f70d57] mt-2 text-sm sm:text-base">Leetcode</p>
                <ul className="pl-4 sm:pl-5 list-none">
                  <li className="text-xs sm:text-sm font-semibold mb-2 before:content-[''] before:inline-block before:align-middle before:w-[4px] sm:before:w-[6px] before:h-[4px] sm:before:h-[6px] before:bg-red-600 before:rounded-full before:mr-2">Solved over 360+ problems on LeetCode.</li>
                  <li className="text-xs sm:text-sm font-semibold mb-2 before:content-[''] before:inline-block before:align-middle before:w-[4px] sm:before:w-[6px] before:h-[4px] sm:before:h-[6px] before:bg-red-600 before:rounded-full before:mr-2">Max Rating 1550+.</li>
                  <li className="text-xs sm:text-sm font-semibold mb-2 before:content-[''] before:inline-block before:align-middle before:w-[4px] sm:before:w-[6px] before:h-[4px] sm:before:h-[6px] before:bg-red-600 before:rounded-full before:mr-2">Ranked in the top 35% on LeetCode.</li>
                </ul>
                <p className="font-bold text-[#f70d57] text-sm sm:text-base">Codeforces</p>
                <ul className="pl-4 sm:pl-5 list-none">
                  <li className="text-xs sm:text-sm font-semibold mb-2 before:content-[''] before:inline-block before:align-middle before:w-[4px] sm:before:w-[6px] before:h-[4px] sm:before:h-[6px] before:bg-red-600 before:rounded-full before:mr-2">Pupil at Codeforces</li>
                  <li className="text-xs sm:text-sm font-semibold mb-2 before:content-[''] before:inline-block before:align-middle before:w-[4px] sm:before:w-[6px] before:h-[4px] sm:before:h-[6px] before:bg-red-600 before:rounded-full before:mr-2">Max Rating 1200+.</li>
                </ul>
                <div className="flex justify-start gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <a href="https://leetcode.com/sbmraj03/" target="_blank" rel="noreferrer" className="inline-block transition-transform duration-300 hover:-translate-y-1">
                    <img src="/images/coding/lc.png" alt="leetcode" className="h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] rounded-full" />
                  </a>
                  <a href="https://codeforces.com/profile/shubh_S.R" target="_blank" rel="noreferrer" className="inline-block transition-transform duration-300 hover:-translate-y-1">
                    <img src="/images/coding/cf.png" alt="codeforces" className="h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] rounded-full" />
                  </a>
                </div>
              </section>
            </div>
            {/* Education Tab Content */}
            <div className={`${tab === 'education' ? 'opacity-100 max-h-[1200px] sm:max-h-[1000px]' : 'opacity-0 max-h-0'} overflow-hidden transition-all duration-500`}>
              <section>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-shadow-white flex items-center font-bold">
                  <i className="fas fa-graduation-cap text-sm sm:text-base md:text-lg"></i>
                  My Education
                </h1>
                <div className="mt-1 space-y-3 sm:space-y-2">
                  {[
                    {
                      img: '/images/clg.png',
                      title: 'B.Tech in Electronics & Telecommunication.',
                      desc1: '4th year | IIEST, shibpur',
                      desc2: 'CGPA: 7.62 (6th sem)',
                      period: '2021-2025 | Pursuing',
                      link: 'https://www.iiests.ac.in/'
                    },
                    {
                      img: '/images/spmclg.png',
                      title: 'Intermediate (11th-12th)',
                      desc1: 'BSEB Board | S.P.M College, BiharSharif, Bihar',
                      desc2: 'Perc: 82.6%',
                      link: 'https://spmcudantpuri.ac.in/'
                    },
                    {
                      img: '/images/school.png',
                      title: 'High School (4th-10th)',
                      desc1: 'CBSE Board | ST. Joseph Academy, BiharSharif, Bihar',
                      desc2: 'Perc: 95.2%',
                      link: 'https://sjacademybiharsharif.com'
                    }
                  ].map((x) => (
                    <div key={x.title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 bg-white p-3 rounded-[8px] sm:rounded-[10px] w-full max-w-[48rem] text-black font-bold">
                      <div className="shrink-0 flex justify-center sm:justify-start">
                        <a href={x.link} target="_blank" rel="noreferrer">
                          <img src={x.img} alt="logo" className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20" />
                        </a>
                      </div>
                      <div className="text-center sm:text-left">
                        <a href={x.link} target="_blank" rel="noreferrer" className="no-underline">
                          <h3 className="mb-1 text-sm sm:text-base md:text-[18px] text-black">{x.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm">{x.desc1}</p>
                          <p className="text-slate-600 text-xs sm:text-sm">{x.desc2}</p>
                          {x.period && <h4 className="mt-1 text-shadow-black text-xs sm:text-sm">{x.period}</h4>}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
