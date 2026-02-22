import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { slowFadeUp } from "../data/animations";
import "../css/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-container">
      <div className="max-w-7xl mx-auto">
        
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
          <motion.div initial={{ width: 0 }} whileInView={{ width: "80px" }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Video Visual */}
          <motion.div className="lg:col-span-4 relative group hidden lg:block" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <div className="rounded-2xl shadow-2xl w-full aspect-[3/4] overflow-hidden bg-black relative border border-gray-800">
              <iframe src="https://player.vimeo.com/video/507820343?muted=1&loop=1&background=1&autoplay=1&app_id=122963" className="absolute top-1/2 left-1/2 w-[300%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" allow="autoplay; fullscreen" title="Resume Visual Video"></iframe>
            </div>
          </motion.div>

          {/* Right Side: Experience & Education */}
          <div className="lg:col-span-8">
            {/* Experience Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-10 uppercase">Experience</h3>
              <div className="timeline-line">
                {resumeData.experience.map((job, index) => (
                  <motion.a href={job.link} target="_blank" key={index} variants={slowFadeUp.item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group block">
                    <div className="timeline-dot top-8" />
                    <div className="resume-card">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold group-hover:text-yellow-500 transition-colors uppercase">{job.title}</h4>
                          <p className="text-yellow-500 font-bold text-sm">{job.company}</p>
                        </div>
                        <span className="text-[10px] px-3 py-1 font-black bg-yellow-500/10 text-yellow-500 rounded-md uppercase border border-yellow-500/20">{job.type}</span>
                      </div>
                      <p className="text-gray-500 text-xs mb-4 italic">{job.date}</p>
                      <p className="text-gray-400 leading-relaxed text-sm">{job.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-3xl font-bold mb-10 uppercase">Education</h3>
              <div className="timeline-line">
                {resumeData.education.map((edu, index) => (
                  <motion.a href={edu.link} target="_blank" key={index} variants={slowFadeUp.item} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex flex-col md:flex-row items-center gap-6 group">
                    <div className="timeline-dot top-1/2 -translate-y-1/2" />
                    <div className="w-full md:w-48 h-32 overflow-hidden rounded-xl border border-gray-800">
                      <img src={edu.image} alt={edu.degree} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="resume-card flex-grow w-full">
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <div>
                          <h4 className="text-lg font-bold group-hover:text-yellow-500 transition-colors uppercase">{edu.degree}</h4>
                          <p className="text-yellow-500 text-xs font-bold mt-1 uppercase">Major: {edu.major}</p>
                        </div>
                        <div className="text-right flex flex-col items-end gap-2">
                          <span className="text-yellow-500 font-black text-[10px] bg-yellow-500/10 px-3 py-1 rounded-full italic border border-yellow-500/20">{edu.date}</span>
                          <span className="text-white font-black text-xs bg-white/5 px-2 py-1 rounded border border-white/10">GPA: {edu.gpa}</span>
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
  );
}

export default Resume;