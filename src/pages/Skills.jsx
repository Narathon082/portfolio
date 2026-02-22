import { motion } from "framer-motion";
import { Settings, Network, Database, Monitor, Cpu, Bot } from "lucide-react";
import { skillsData } from "../data/skillsData";
import { fastFadeUp } from "../data/animations"; // ✅ เปลี่ยนเป็น fastFadeUp
import "../css/Skills.css";


const IconRenderer = ({ name, colorClass }) => {
  const icons = {
    Bot: <Bot className={`w-full h-full ${colorClass}`} />,
    Settings: <Settings className={`w-full h-full ${colorClass}`} />,
    Network: <Network className={`w-full h-full ${colorClass}`} />,
    Cpu: <Cpu className={`w-full h-full ${colorClass}`} />,
    Monitor: <Monitor className={`w-full h-full ${colorClass}`} />,
    Database: <Database className={`w-full h-full ${colorClass}`} />,
  };
  return icons[name] || null;
};

function Skills() {
  return (
    <section id="skills" className="skills-container">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-yellow-500 mb-6 uppercase tracking-tighter"
          >
            {skillsData.title}
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[10px] uppercase tracking-[0.3em] font-bold">
            {skillsData.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="vertical-label-container">
            <h3 className="text-4xl font-black tracking-widest uppercase text-white select-none">
              SKILLS
            </h3>
          </div>

          <motion.div 
            variants={fastFadeUp.container} // ✅ ใช้ชุดแอนิเมชันที่เร็วขึ้น
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full"
          >
            {skillsData.list.map((skill, index) => (
              <motion.div
                key={index}
                variants={fastFadeUp.item} // ✅ ใช้ชุดแอนิเมชันที่เร็วขึ้น
                whileHover={{ y: -8, scale: 1.02 }} // ✅ ปรับการเด้งตอน Hover ให้พอดีกับความเร็ว
                className="skill-card group relative"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {skill.type === "lucide" ? (
                    <IconRenderer name={skill.iconName} colorClass={skill.color} />
                  ) : (
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className={`w-full h-full object-contain transition-all duration-500 
                        ${skill.name === 'GitHub' ? 'brightness-0 invert' : ''}`} 
                    />
                  )}  
                </div>
                <span className="text-gray-200 group-hover:text-white font-bold text-[9px] tracking-widest uppercase text-center relative z-10 transition-colors">
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

export default Skills;