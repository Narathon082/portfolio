import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"

function Projects() {
  // Variants สำหรับการทำ Stagger animation ให้การ์ดค่อยๆ โผล่มา
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section
      id="projects"
      // เปลี่ยนกลับเป็นสีดำเข้มตามที่คุณต้องการเพื่อให้เข้ากับหน้า Home
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
              Project
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group h-full"
            >
              {/* ส่งข้อมูลโปรเจกต์ไปยัง ProjectCard ที่รองรับ Swiper และ Video */}
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* ข้อความเพิ่มเติมท้ายส่วน */}
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