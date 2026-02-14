function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <img 
        src={project.image} 
        alt={project.title} 
        className="rounded-lg mb-4"
      />

      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>

      <div className="flex gap-2 mt-3">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        <a href={project.github} className="text-blue-500">
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} className="text-green-500">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard