import Typewriter from "typewriter-effect"
import Navbar from "../components/Navbar"
import About from "./About"
import Projects from "./Projects"
import { motion } from "framer-motion"
import "../index.css"

function Home() {
  return (
    <div id="home" className="relative min-h-screen w-full text-white">

      <Navbar />

      {/* Background (ไม่มี animation แล้ว) */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/g0.png"
          className="w-full h-full object-cover object-center"
          alt="background"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="flex items-center min-h-screen px-8 lg:px-24">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <motion.span
            className="text-yellow-400 tracking-[0.4em] text-sm font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Typewriter
              options={{
                strings: ["HELLO", "Welcome to My Portfolio"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
              }}
            />
          </motion.span>

          <motion.h1
            className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
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
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Building modern, scalable and high-performance web experiences.
          </motion.p>

        </motion.div>
      </div>

      <About />
      <Projects />
    </div>
  )
}

export default Home