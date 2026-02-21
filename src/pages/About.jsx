import { motion } from "framer-motion"
import { FileText, Eye, Download } from "lucide-react"

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
    },
  };

const fileButtons = [
  {
    label: "View Transcript",
    // เพิ่ม /portfolio นำหน้า path เดิม
    path: "/portfolio/file/Narathon_Nu-muang_Transcript.pdf", 
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <FileText size={18} />,
    primary: true
  },
  {
    label: "View Portfolio / CV",
    // เพิ่ม /portfolio นำหน้าเช่นกัน
    path: "/portfolio/file/Narathon_Nu-muang_CV.pdf", 
    target: "_blank",
    rel: "noopener noreferrer",
    icon: <Eye size={18} />,
    primary: false
  }
];

  return (
    <motion.section
      id="about"
      // พื้นหลังสีสว่างตามที่คุณต้องการ
      className="bg-[#f8f9fa] py-32 px-8 lg:px-24 scroll-mt-24 overflow-hidden text-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* 📸 Left Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative group justify-self-center lg:justify-self-start"
        >
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src="./images/g0.png"
              alt="Narathon Nu-muang"
              className="w-full max-w-sm lg:max-w-md object-cover aspect-[4/5] z-10 cursor-pointer"
            />
          </div>
        </motion.div>

        {/* 📝 Right Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-yellow-600/50"></span>
            <span className="text-yellow-600 tracking-[0.5em] text-[10px] font-black uppercase">My Bio</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-6xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-gray-900">
            Narrathon <br />
            {/* 🎨 ไล่สีตัวหนังสือใหม่: ใช้โทนเทาเข้มไปเหลืองทองเพื่อให้ดูหรูหราบนพื้นขาว */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-yellow-600 to-gray-400">
              Nu-muang
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed max-w-xl">
            <p>
              Industrial Technology student at <span className="text-gray-900 font-bold border-b-2 border-yellow-500/30">KMUTNB</span>, 
              specializing in Electronic Engineering Technology I am passionate about building efficient applications and 
              solving complex technical problems through code. With a strong foundation in electronic systems, 
              I enjoy bridging the gap between hardware and software to create innovative digital solutions.
            </p>
            <p>
              continuously learning about emerging technologies. My goal is to leverage my background in network infrastructure 
              and IT support to build secure, efficient systems that empower businesses. I thrive in collaborative environments 
              and am always looking for new challenges in the world of IT operations.
            </p>
          </motion.div>

          {/* 🔘 Interactive File Buttons - ปรับให้เหมือนกันทั้งสองปุ่ม */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
            {fileButtons.map((btn, idx) => (
              <a 
                key={idx} 
                href={btn.path} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative"
              >
                <motion.button 
                  whileHover={{ y: -4, backgroundColor: "#1a1a1a" }} // เพิ่มการเปลี่ยนสีเข้มขึ้นเล็กน้อยเมื่อ Hover
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 border border-gray-800 bg-[#0f0f0f] text-[#eab308] font-bold uppercase text-[11px] tracking-widest shadow-lg hover:border-yellow-500/50"
                >
                  <span className="flex items-center gap-3">
                    {btn.icon}
                    {btn.label}
                  </span>
                  <Download size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </motion.button>
              </a>
            ))}
          </motion.div>

          <motion.p variants={itemVariants} className="mt-8 text-[9px] text-gray-400 uppercase tracking-[0.2em] font-bold">
            * Documents open in new tab for review before download
          </motion.p>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default About