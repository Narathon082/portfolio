import { motion } from "framer-motion"

function Resume() {
  const experience = [
    {
      title: "IT Infrastructure and Data Support Intern",
      company: "British International School Phuket",
      date: "March 2023 - May 2023",
      type: "Internship",
      link: "https://www.bisphuket.ac.th/",
      desc: "IT & Network Support Specialist with a solid foundation in deploying and maintaining enterprise LAN infrastructure and Windows systems. Proven at delivering high-availability support to ensure business continuity and minimal downtime. Skilled in systematic troubleshooting and documentation to drive operational efficiency and align IT services with user needs for maximum reliability."
    },
    {
      title: "Junior IT Support Intern",
      company: "British International School Phuket",
      date: "June 2022 - October 2022",
      type: "Internship",
      link: "https://www.bisphuket.ac.th/",
      desc: "Delivered end-user technical support for hardware, software, and peripheral devices, ensuring minimal downtime and sustained business continuity."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Industrial Technology",
      major: "Electronic Engineering Technology (ECT)",
      school: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
      date: "2024 - Present",
      gpa: "2.63", 
      link: "https://www.kmutnb.ac.th/",
      image: "./images/kmutnb.jpg" 
    },
    {
      degree: "High Vocational Certificate",
      major: "Information Technology",
      school: "Phuket Technical College",
      date: "2021 - 2023",
      gpa: "3.87", 
      link: "http://www.ptc.ac.th/",
      image: "./images/phuket.jpg"
    }
  ];

  return (
    <section id="resume" className="bg-[#0f0f0f] py-28 px-8 lg:px-24 scroll-mt-24 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏆 Section Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-yellow-500 uppercase tracking-tighter"
          >
            My Resume
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 🖼 Left Side: Video Visual */}
          <motion.div 
            className="lg:col-span-4 relative group hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            
            <div className="rounded-2xl shadow-2xl w-full aspect-[3/4] overflow-hidden bg-black relative border border-gray-800">
              <iframe
                src="https://player.vimeo.com/video/507820343?muted=1&loop=1&background=1&autoplay=1&app_id=122963"
                className="absolute top-1/2 left-1/2 w-[300%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                allow="autoplay; fullscreen"
                title="Resume Visual Video"
              ></iframe>
            </div>
          </motion.div>

          {/* 📝 Right Side: Experience & Education */}
          <div className="lg:col-span-8">
            
            {/* Experience Section */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-yellow-500 rounded-lg text-black shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight uppercase">Experience</h3>
              </div>

              <div className="space-y-12 border-l-2 border-dashed border-gray-800 ml-6 pl-10 relative">
                {experience.map((job, index) => (
                  <motion.a 
                    href={job.link}
                    target="_blank"
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group block"
                  >
                    <div className="absolute -left-[51px] top-8 w-5 h-5 bg-[#0f0f0f] border-4 border-yellow-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300" />
                    <div className="bg-[#141414] p-8 rounded-2xl shadow-sm hover:shadow-yellow-500/10 transition-all duration-300 border border-gray-800 hover:border-yellow-500/50">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors uppercase tracking-tight">{job.title}</h4>
                          <p className="text-yellow-500 font-bold text-sm">{job.company}</p>
                        </div>
                        <span className="text-[10px] px-3 py-1 font-black bg-yellow-500/10 text-yellow-500 rounded-md uppercase tracking-widest border border-yellow-500/20">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs mb-4 italic font-medium">{job.date}</p>
                      <p className="text-gray-400 leading-relaxed text-sm">{job.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-yellow-500 rounded-lg text-black shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight uppercase">Education</h3>
              </div>

              <div className="space-y-12 border-l-2 border-dashed border-gray-800 ml-6 pl-10 relative">
                {education.map((edu, index) => (
                  <motion.a 
                    href={edu.link}
                    target="_blank"
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row items-center gap-6 group cursor-pointer"
                  >
                    <div className="absolute -left-[51px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#0f0f0f] border-4 border-yellow-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-sm" />
                    
                    {/* ส่วนรูปภาพ: ลบ grayscale ออกเพื่อให้มีสี */}
                    <div className="w-full md:w-48 h-32 overflow-hidden rounded-xl shadow-md flex-shrink-0 relative border border-gray-800">
                      <img 
                        src={edu.image} 
                        alt={edu.degree} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 hover:border-yellow-500/50 shadow-sm flex-grow w-full relative transition-all">
                      <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-gray-800 group-hover:bg-yellow-500/50" />
                      
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors uppercase tracking-tight">
                            {edu.degree}
                          </h4>
                          <p className="text-yellow-500 text-xs font-bold mt-1 uppercase tracking-wider">
                            Major: {edu.major}
                          </p>
                        </div>
                        <div className="text-right flex flex-col items-end gap-2">
                            <span className="text-yellow-500 font-black text-[10px] bg-yellow-500/10 px-3 py-1 rounded-full italic border border-yellow-500/20">
                            {edu.date}
                            </span>
                            <span className="text-white font-black text-xs bg-white/5 px-2 py-1 rounded shadow-sm border border-white/10">
                                GPA: {edu.gpa}
                            </span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-[10px] font-bold mt-2 uppercase tracking-widest">{edu.school}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume