import { Github, Twitter, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react"
import { motion } from "framer-motion"

function Footer() {
  const currentYear = new Date().getFullYear();

  // ลิงก์ส่วนตัวของคุณที่ส่งมา
  const socialLinks = {
    github: "https://github.com/Narathon082/portfolio",
    linkedin: "https://www.linkedin.com/in/%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%98%E0%B8%A3-%E0%B8%AB%E0%B8%99%E0%B8%B9%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87-0ab0773aa/",
    instagram: "#" 
  };

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-24 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">

        {/* Top Section - จัด Grid 12 คอลัมน์เพื่อให้สมดุล */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20">

          {/* LOGO & DESCRIPTION (ฝั่งซ้าย - 6 คอลัมน์) */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-black mb-6 text-white tracking-tighter uppercase">
              PORTFOLIO<span className="text-yellow-500">.</span>
            </h2>
            <p className="max-w-md leading-relaxed text-gray-500 text-sm">
              Industrial technology students, Department of Electronic Engineering Technology, Electronic Technology major. <br />
              King Mongkut's University of Technology North Bangkok
            </p>
          </div>

          {/* QUICK LINKS (ตรงกลาง - 3 คอลัมน์) */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.3em] mb-8 text-yellow-500 font-black">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-white transition-colors cursor-pointer"><a href="#home">Home</a></li>
              <li className="hover:text-white transition-colors cursor-pointer"><a href="#about">About</a></li>
              <li className="hover:text-white transition-colors cursor-pointer"><a href="#skills">Skills</a></li>
              <li className="hover:text-white transition-colors cursor-pointer"><a href="#projects">Projects</a></li>
              <li className="hover:text-white transition-colors cursor-pointer"><a href="#resume">Resume</a></li>
              <li className="hover:text-white transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* CONNECT (ฝั่งขวาสุด - 3 คอลัมน์ เพื่อปิดพื้นที่ว่าง) */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.3em] mb-8 text-yellow-500 font-black">
              Connect
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                >
                  GitHub <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                >
                  LinkedIn <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Icons พร้อมลิงก์จริง */}
          <div className="flex gap-8">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              className="text-gray-600 hover:text-yellow-500 transition-all transform hover:-translate-y-1"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              className="text-gray-600 hover:text-yellow-500 transition-all transform hover:-translate-y-1"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
            <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
              Designed & Built by Narathon Nu-muang
            </p>
            <p className="text-[10px] text-gray-700">
              © {currentYear} All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer