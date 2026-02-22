import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import Footer from "../components/Footer"
import { homeData } from "../data/homeData"
import { slowFadeUp, bgZoomEffect } from "../data/animations"
import "../css/Home.css"

function Home() {
  return (
    <div id="home" className="home-container font-sans">
      <Navbar />

      {/* 🌌 Background Layer */}
      <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden">
        <motion.img
          initial={bgZoomEffect.initial}
          whileInView={bgZoomEffect.animate}
          transition={bgZoomEffect.transition}
          viewport={{ once: true }}
          src={homeData.assets.backgroundGif} 
          className="w-full h-full object-cover object-center"
          alt="background"
        />
        <div className="home-overlay" />
      </div>

      {/* 📝 Content Area */}
      <div className="flex items-center min-h-screen px-8 lg:px-24">
        <motion.div
          className="max-w-4xl"
          variants={slowFadeUp.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ส่วน Welcome */}
          <motion.span
            className="text-yellow-400 tracking-[0.4em] text-sm font-extrabold block mb-4"
            variants={slowFadeUp.item}
          >
            <Typewriter
              options={{
                strings: homeData.welcome.typewriter,
                autoStart: true, loop: true, delay: 75,
              }}
            />
          </motion.span>

          {/* ส่วนชื่อและตำแหน่ง */}
          <motion.h1
            className="mt-6 text-5xl lg:text-8xl font-black leading-[1.1] tracking-tighter"
            variants={slowFadeUp.item}
          >
            {homeData.intro.main}
            <br />
            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: homeData.intro.roles,
                  autoStart: true, loop: true,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-gray-300 text-lg lg:text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-yellow-400/50 pl-6"
            variants={slowFadeUp.item}
          >
            {homeData.description}
          </motion.p>

          <motion.div variants={slowFadeUp.item} className="mt-10 flex gap-6 ">
            <a href={homeData.buttons.primary.link} className="home-btn bg-yellow-300/80">
              {homeData.buttons.primary.label}
            </a>
            <a href={homeData.buttons.secondary.link} className="home-btn bg-yellow-300/80">
              {homeData.buttons.secondary.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Sections ต่อท้าย */}
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home