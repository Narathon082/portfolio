// src/pages/Projects.jsx
import projects from "../data/projects" // ✅ ตรวจสอบว่าในไฟล์ projects.js มีการ export default
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"
import { fastFadeUp } from "../data/animations" // ✅ ใช้แอนิเมชันชุดที่เร็วขึ้น

function Projects() {
  return (
    <section
      id="projects"
      // ✅ ใช้สีพื้นหลังสว่างตามที่คุณเขียนมา (หรือเปลี่ยนเป็น #0f0f0f ถ้าต้องการให้เข้ากับหน้า Home)
      className="bg-[#f8f9fa] py-32 px-8 lg:px-24 scroll-mt-24 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🏆 Section Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 tracking-[0.5em] text-xs font-black uppercase">
              Project & Portfolio
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black text-gray-900 tracking-tighter uppercase leading-[0.85]"
          >
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">Works</span>
          </motion.h2>
        </div>

        {/* 📁 Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={fastFadeUp.container} // ✅ เปลี่ยนมาใช้ fastFadeUp
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fastFadeUp.item} // ✅ เปลี่ยนมาใช้ fastFadeUp
              className="group h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-gray-700 uppercase tracking-[0.3em] text-[10px] font-bold"
        >
          * Interact with cards to view more images or watch videos
        </motion.p>

      </div>
    </section>
  )
}

export default Projects