import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0f0f0f] py-24 px-8 text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-yellow-500 mb-6 uppercase tracking-tight">What I do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical skills and tools I use to bring ideas to life.
          </p>
        </div>

        {/* ปรับส่วนนี้: flex-row และ items-center จะช่วยให้ SKILLS อยู่ตรงกลางแนวตั้ง */}
        <div className="flex flex-row gap-8 md:gap-12 items-center justify-center">
          
          {/* Label ด้านข้างที่ปรับให้อยู่กึ่งกลางแล้ว */}
          <div className="flex items-center gap-4 [writing-mode:vertical-lr] rotate-180 border-l-4 border-yellow-500 py-4 pl-4 h-fit">
            <h3 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-white/40">
              Skills
            </h3>
          </div>

          {/* Grid ไอคอน */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 10px 30px rgba(234, 179, 8, 0.2)" }}
                className="bg-[#141414] p-6 md:p-8 rounded-xl flex flex-col items-center justify-center border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center p-2 rounded-full group-hover:bg-white/10 transition-colors">
                <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain transition-all duration-300 
                    ${skill.name === 'GitHub' 
                        ? 'invert brightness-200 group-hover:invert-0 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                        : ''}`} 
                />
                </div>
                <span className="text-gray-400 group-hover:text-white font-bold text-[10px] tracking-widest uppercase">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;