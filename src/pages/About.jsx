import { motion } from "framer-motion"

function About() {
  // Variants สำหรับเนื้อหาด้านขวา (ค่อยๆ โผล่มาทีละบรรทัด)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // เว้นระยะแต่ละองค์ประกอบ 0.2 วินาที
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="about"
      className="bg-gray-100 py-24 px-8 lg:px-24 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Image - อนิเมชั่นแบบ Hover Scale และ Smooth Lift */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          className="flex justify-center relative group"
        >
          
          <motion.img
            whileHover={{ scale: 1.03, y: -10 }}
            src="/images/g0.png"
            alt="Profile"
            className="rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-md object-cover aspect-[4/5] z-10 cursor-pointer"
          />
        </motion.div>

        {/* Right Content - อนิเมชั่นแบบค่อยๆ โผล่ (Stagger) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-6 text-gray-800 flex items-center gap-3"
          >
            <span className="w-10 h-1 bg-green-500 rounded-full" />
            My Bio
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
            Hi, I'm Narathon Nu-muang <br/>
            <span className="text-green-600 italic">Industrial Technology Student</span>
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-6">
            I have interned at British International School Phuket, where I worked on enterprise network setup, 
            system troubleshooting, and data operations. I enjoy solving technical problems, improving system reliability, 
            and continuously learning about emerging technologies.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed mb-10">
            My goal is to leverage my background in network infrastructure and IT support to build secure, 
            efficient systems that empower businesses. I thrive in collaborative environments and am 
            always looking for new challenges in the world of IT operations.
          </motion.p>

          {/* Buttons - อนิเมชั่น Hover แบบขยายและมีเงา */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
            <a href="#contact">
              <motion.button 
                whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 bg-green-500 text-white font-bold rounded-full transition shadow-lg"
              >
                HIRE ME
              </motion.button>
            </a>
      
            <a href="file/Narathon_Nu-muang_CV.pdf" download>
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#111827", // สีดำที่เข้มขึ้นเมื่อ Hover
                  borderColor: "#111827" ,
                  boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 bg-gray-800 text-white border-2 border-gray-800 font-bold rounded-full transition shadow-md"
              >
                DOWNLOAD CV
              </motion.button>
            </a>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  )
}

export default About