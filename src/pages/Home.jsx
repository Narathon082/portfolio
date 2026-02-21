import Typewriter from "typewriter-effect"
import Navbar from "../components/Navbar"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import "../index.css"

function Home() {
  // สร้าง Variants สำหรับ Container เพื่อคุมลำดับการเล่นแอนิเมชันลูกๆ
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // ให้ลูกแต่ละตัวโผล่ห่างกัน 0.3 วินาที
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div id="home" className="relative min-h-screen w-full text-white overflow-x-hidden">

      <Navbar />

      {/* Background - เพิ่มแอนิเมชันตอนโหลดหน้าเว็บให้ค่อยๆ Zoom out ช้าๆ */}
      <div className="absolute inset-0 -z-20">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/g0.png"
          className="w-full h-full object-cover object-center"
          alt="background"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="flex items-center min-h-screen px-8 lg:px-24">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* ส่วนที่คุณห้ามแก้ (รักษารูปแบบเดิมไว้ทุกประการ) */}
          <motion.span
            className="text-yellow-400 tracking-[0.4em] text-sm font-semibold block mb-4"
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

          {/* ส่วนที่คุณห้ามแก้ (รักษารูปแบบเดิมไว้ทุกประการ) */}
          <motion.h1
            className="mt-6 text-5xl lg:text-8xl font-black leading-[1.1] tracking-tighter"
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
                    "React Developer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl border-l-4 border-yellow-400/50 pl-6"
            variants={itemVariants}
          >
            Building modern, scalable and high-performance web experiences.
            Specializing in bridging the gap between design and functionality.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex gap-6"
          >
            <a href="#projects" className="px-8 py-3 border-2 border-white font-bold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95">
              VIEW PROJECTS
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-white font-bold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95">
              CONTACT ME
            </a>
          </motion.div>

        </motion.div>
      </div>

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