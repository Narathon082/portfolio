import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"

function Projects() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section
      id="projects"
      className="bg-[#f8f9fa] py-28 px-8 lg:px-24 scroll-mt-24 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🏆 Section Header - คุมโทนเดียวกับส่วนอื่น ๆ */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-[2px] w-12 bg-yellow-500"></span>
            <span className="text-yellow-500 tracking-[0.3em] text-xs font-black uppercase">
              Projects
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 uppercase"
          >
            Selected <span className="text-yellow-500">Works</span>
          </motion.h2>
        </div>

        {/* 📁 Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
            >
              {/* ตกแต่ง Card เพิ่มเติมภายในคอมโพเนนต์ของคุณ */}
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects