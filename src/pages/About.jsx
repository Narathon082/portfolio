import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { aboutData } from "../data/aboutData"; // 👈 ใส่จุด 2 ตัวแบบนี้ (.. /)
import { slowFadeUp } from "../data/animations"; // 👈 ใส่จุด 2 ตัวแบบนี้ (.. /)
import "../css/About.css";

function About() {
  return (
    <motion.section
      id="about"
      className="bg-[#f8f9fa] py-32 px-8 lg:px-24 scroll-mt-24 overflow-hidden text-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* 📸 Left Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // นุ่มนวลและช้าลง
          viewport={{ once: true }}
          className="relative group justify-self-center lg:justify-self-start"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src={aboutData.image}
              alt={aboutData.firstName}
              className="w-full max-w-sm lg:max-w-md object-cover aspect-[4/5] z-10 cursor-pointer"
            />
          </div>
        </motion.div>

        {/* 📝 Right Content Area */}
        <motion.div
          variants={slowFadeUp.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <motion.div variants={slowFadeUp.item} className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-yellow-600/50"></span>
            <span className="text-yellow-600 tracking-[0.5em] text-[10px] font-black uppercase">My Bio</span>
          </motion.div>

          <motion.h2 variants={slowFadeUp.item} className="text-6xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-gray-900">
            {aboutData.firstName} <br />
            <span className="about-name-gradient">{aboutData.lastName}</span>
          </motion.h2>

          <motion.div variants={slowFadeUp.item} className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed max-w-xl">
            {aboutData.bio.map((paragraph) => (
              <p key={paragraph.id}>
                {paragraph.text.includes(paragraph.highlight) ? (
                  <>
                    {paragraph.text.split(paragraph.highlight)[0]}
                    <span className="text-gray-900 font-bold border-b-2 border-yellow-500/30">
                      {paragraph.highlight}
                    </span>
                    {paragraph.text.split(paragraph.highlight)[1]}
                  </>
                ) : (
                  paragraph.text
                )}
              </p>
            ))}
          </motion.div>

          {/* 🔘 Interactive File Buttons */}
          <motion.div variants={slowFadeUp.item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
            {aboutData.fileButtons.map((btn, idx) => (
              <a key={idx} href={btn.path} target="_blank" rel="noopener noreferrer" className="group/btn relative">
                <motion.button 
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="about-file-btn"
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
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;