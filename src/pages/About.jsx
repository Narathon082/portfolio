import Navbar from "../components/Navbar"

function About() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gray-50 text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          About Me
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get to know more about who I am and what I do.
        </p>
      </section>

      {/* About Content */}
      <section className="py-20 px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/400/500"
              alt="Profile"
              className="rounded-2xl shadow-xl w-80"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              I’m Narathon Nu-muang
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              I am a Full-Stack Developer specializing in building modern,
              responsive, and scalable web applications using React, Node.js,
              and Tailwind CSS. I enjoy solving complex problems and turning
              ideas into real digital experiences.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My passion is creating clean UI, smooth user experiences, and
              high-performance applications that provide real value.
            </p>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 px-8 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">React</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Node.js</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Tailwind CSS</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">MongoDB</h3>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-4xl font-extrabold text-yellow-500">3+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-yellow-500">20+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold text-yellow-500">10+</h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About