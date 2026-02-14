import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects