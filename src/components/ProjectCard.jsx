import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink, Maximize2, X } from 'lucide-react'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProjectCard({ project }) {
  const [zoomContent, setZoomContent] = useState(null);

  return (
    <div className="bg-[#141414] rounded-3xl overflow-hidden border border-gray-800 shadow-sm hover:shadow-yellow-500/10 transition-all duration-500 group flex flex-col h-full">
      
      {/* 🖼 Media Section */}
      <div className="relative h-64 overflow-hidden bg-black">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full custom-swiper"
        >
          {/* ส่วนของรูปภาพ */}
          {project.images && project.images.map((img, index) => (
            <SwiperSlide key={index} className="relative">
              <img src={img} className="w-full h-full object-cover" alt="" />
              <button 
                onClick={() => setZoomContent({ type: 'image', src: img })}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-white/10"
              >
                <Maximize2 size={16} />
              </button>
            </SwiperSlide>
          ))}

          {/* ส่วนของวิดีโอ */}
          {project.video && (
            <SwiperSlide className="relative">
              <video src={project.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              <button 
                onClick={() => setZoomContent({ type: 'video', src: project.video })}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-white/10"
              >
                <Maximize2 size={16} />
              </button>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* 📝 Content Section */}
      <div className="p-8 flex flex-col flex-grow text-white">
        <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-yellow-500 transition-colors mb-4">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400 font-bold uppercase tracking-widest">{t}</span>
            ))}
        </div>
      </div>

      {/* 🔍 Zoom Modal */}
      <AnimatePresence>
        {zoomContent && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setZoomContent(null)}
          >
            <motion.button className="absolute top-8 right-8 text-white hover:text-yellow-500 z-[1001]">
              <X size={32}/>
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full h-[80vh] flex items-center justify-center bg-[#141414] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {zoomContent.type === 'image' && (
                <img src={zoomContent.src} className="max-w-full max-h-full object-contain" alt="" />
              )}
              {zoomContent.type === 'video' && (
                <video src={zoomContent.src} controls autoPlay className="max-w-full max-h-full" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectCard;