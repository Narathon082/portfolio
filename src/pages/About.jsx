// src/pages/About.jsx
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { aboutData } from "../data/aboutData"; 
import { slowFadeUp } from "../data/animations"; 
import "../css/About.css";

function About() {
  return (
    <motion.section
      id="about"
      className="bg-[#f8f9fa] py-32 px-8 lg:px-24 scroll-mt-24 overflow-hidden text-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">

        {/* 📸 Left Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative group justify-self-center lg:justify-self-start"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50 bg-white">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
          <motion.div variants={slowFadeUp.item} className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-12 bg-yellow-600"></span>
            <span className="text-yellow-600 tracking-[0.6em] text-[11px] font-black uppercase">About Me</span>
          </motion.div>

          <motion.h2 variants={slowFadeUp.item} className="text-6xl lg:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9] text-gray-900">
            {aboutData.firstName} <br />
            <span className="about-name-gradient">{aboutData.lastName}</span>
          </motion.h2>

          <motion.div variants={slowFadeUp.item} className="space-y-8 text-gray-600 text-lg font-medium leading-loose max-w-xl">
            {aboutData.bio.map((paragraph) => (
              <p key={paragraph.id}>
                {paragraph.text.includes(paragraph.highlight) ? (
                  <>
                    {paragraph.text.split(paragraph.highlight)[0]}
                    <span className="text-gray-900 font-bold border-b-2 border-yellow-500/40">
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
          <motion.div variants={slowFadeUp.item} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16 mb-8">
            {aboutData.fileButtons.map((btn, idx) => (
              <a key={idx} href={btn.path} target="_blank" rel="noopener noreferrer" className="group/btn relative">
                <motion.button 
                  whileHover={{ y: -5, backgroundColor: "#111" }}
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

          {/* ℹ️ Helper Text */}
          <motion.p 
            variants={slowFadeUp.item}
            className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] italic"
          >
            * Click to open documents in a new tab
          </motion.p>
        </motion.div>
            
      </div>
    </motion.section>
  );
}

export default About;