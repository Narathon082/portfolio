import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // ตรวจสอบการ Scroll เพื่อเปลี่ยนสไตล์ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" }, // เพิ่ม Skills เข้าไปด้วย
    { name: "Projects", id: "projects" }, // ปรับ id ให้ตรงกับหน้า Home ของคุณ
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* Logo Animation */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-white cursor-pointer group"
          onClick={() => scrollToSection("home")}
        >
          PORTFOLIO<span className="text-yellow-500 group-hover:text-white transition-colors">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors group"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
              {/* เส้นใต้ที่จะวิ่งออกมาเวลา Hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;