import { motion } from "framer-motion"

function Resume() {
  const experience = [
    {
      title: "Senior Front End Developer",
      company: "Facebook, Inc. • San Francisco",
      date: "Nov 2019 - Present",
      type: "FULLTIME",
      desc: "Lead the development of scalable web applications using React and Next.js."
    },
    {
      title: "Front-end Engineer",
      company: "Google, Inc. • San Francisco",
      date: "Mar 2015 - Nov 2019",
      type: "PART TIME",
      desc: "Developed and maintained core UI components for enterprise-level products."
    }
  ];

  const education = [
    {
      degree: "Master in Software Engineering",
      school: "Columbia University",
      date: "2015 - 2017",
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      degree: "Bachelor in Software Engineering",
      school: "Harvard University",
      date: "2011 - 2015",
      image: "https://picsum.photos/400/300?random=2"
    }
  ];

  return (
    <section id="resume" className="bg-[#0f0f0f] py-28 px-8 lg:px-24 scroll-mt-24 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏆 Section Header - ปรับให้เหมือนสไตล์ Skills */}
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 🖼 Left Side: Video Visual */}
          <motion.div 
            className="lg:col-span-4 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 border-2 border-yellow-500/10 rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
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
                <h3 className="text-3xl font-bold text-white tracking-tight">Experience</h3>
              </div>

              <div className="space-y-12 border-l-2 border-dashed border-gray-800 ml-6 pl-10 relative">
                {experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-[51px] top-8 w-5 h-5 bg-[#0f0f0f] border-4 border-yellow-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300" />
                    <div className="bg-[#141414] p-8 rounded-2xl shadow-sm hover:shadow-yellow-500/5 transition-all duration-300 border border-gray-800 hover:border-yellow-500/50">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{job.title}</h4>
                          <p className="text-gray-400 font-medium">{job.company}</p>
                        </div>
                        <span className="text-[10px] px-3 py-1 font-black bg-yellow-500/10 text-yellow-500 rounded-md uppercase tracking-widest border border-yellow-500/20">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4 italic">{job.date}</p>
                      <p className="text-gray-400 leading-relaxed text-sm">{job.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section - รูปภาพอยู่ซ้ายและพื้นหลังเข้ม */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-yellow-500 rounded-lg text-black shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Education</h3>
              </div>

              <div className="space-y-12 border-l-2 border-dashed border-gray-800 ml-6 pl-10 relative">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col md:flex-row items-center gap-6 group"
                  >
                    <div className="absolute -left-[51px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#0f0f0f] border-4 border-yellow-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-sm" />
                    
                    <div className="w-full md:w-48 h-32 overflow-hidden rounded-xl shadow-md flex-shrink-0 relative border border-gray-800">
                      <img 
                        src={edu.image} 
                        alt={edu.degree} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 hover:border-yellow-500/50 shadow-sm flex-grow w-full relative transition-all">
                      <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-gray-800 group-hover:bg-yellow-500/50" />
                      
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h4 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-yellow-500 font-bold text-[10px] bg-yellow-500/10 px-3 py-1 rounded-full whitespace-nowrap italic border border-yellow-500/20">
                          {edu.date}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm font-medium">{edu.school}</p>
                    </div>
                  </motion.div>
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