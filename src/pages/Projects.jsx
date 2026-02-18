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
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      id="portfolio"
      className="bg-gray-100 py-24 px-8 lg:px-24 scroll-mt-24"
    >
      <div className="min-h-screen bg-gray-900 text-white p-10">

        <h2 className="text-3xl font-bold mb-8 text-center">
          My Projects
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}   // เล่นซ้ำได้
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects