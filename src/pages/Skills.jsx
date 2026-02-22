import { motion } from "framer-motion";
import { 
  Settings, 
  Network, 
  Database, 
  Monitor, 
  Cpu,
  Bot // เพิ่ม Bot เข้ามาสำหรับ AI Prompting
} from "lucide-react"; 

const skills = [
  // Programming & Dev Tools (ใช้สีต้นฉบับเพื่อให้มีสีสัน)
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "SQL", icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

  // AI & Technical Skills
  { name: "AI Prompting", type: "icon", component: <Bot className="w-full h-full text-yellow-400" /> }, // เพิ่มใหม่ตามคำขอ
  { name: "IT Support", type: "icon", component: <Settings className="w-full h-full text-blue-400" /> },
  { name: "Networking", type: "icon", component: <Network className="w-full h-full text-green-400" /> },
  { name: "LAN Cabling", type: "icon", component: <Cpu className="w-full h-full text-yellow-400" /> },
  { name: "OS Install", type: "icon", component: <Monitor className="w-full h-full text-purple-400" /> },
  { name: "Database Info", type: "icon", component: <Database className="w-full h-full text-orange-400" /> },
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
    <section id="skills" className="bg-[#0f0f0f] py-24 px-8 text-white min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-yellow-500 mb-6 uppercase tracking-tighter"
          >
            What I do
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm uppercase tracking-[0.2em]">
            Technical skills and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center">
          
          {/* Label ด้านข้าง */}
          <div className="hidden lg:flex items-center gap-4 [writing-mode:vertical-lr] rotate-180 border-l-4 border-yellow-500 py-6 pl-4 h-fit">
            <h3 className="text-4xl font-black tracking-widest uppercase text-white select-none">
              Skills
            </h3>
          </div>

          {/* Grid ไอคอน - ปรับ lg:grid-cols-6 เพื่อให้สมส่วนเมื่อมี 18 ไอคอน */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 10px 30px rgba(254, 240, 138, 0.1)" }}
                className="bg-[#141414] p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-300 group relative"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {skill.type === "icon" ? (
                    skill.component
                  ) : (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain ${skill.name === 'GitHub' ? 'invert brightness-200 group-hover:invert-0' : ''}`}
                      onError={(e) => { e.target.src = "https://www.svgrepo.com/show/354380/static-code-analysis.svg"; }}
                    />
                  )}
                </div>
                <span className="text-gray-500 group-hover:text-white font-bold text-[10px] tracking-widest uppercase text-center relative z-10 transition-colors">
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