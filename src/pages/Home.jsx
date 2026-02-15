import Typewriter from "typewriter-effect"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://picsum.photos/1920/1080"
          className="w-full h-full object-cover"
          alt="background"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="flex items-center h-screen px-8 lg:px-24">
        <div className="max-w-3xl">

          {/* Typewriter Greeting */}
          <span className="text-yellow-400 tracking-[0.4em] text-sm font-semibold">
            <Typewriter
              options={{
                strings: ["HELLO", "Welcome to My Portfolio"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
              }}
            />
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
            I’m Narathon Nu-muang
            <br />
            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Frontend Developer",
                    "React Developer",
                    "Full-Stack Developer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl">
            Building modern, scalable and high-performance web experiences.
          </p>

        </div>
      </div>

    </div>
  )
}

export default Home