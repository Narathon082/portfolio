// src/data/animations.js

export const slowFadeUp = {
  // Container สำหรับคุม stagger (จังหวะโผล่ของลูกๆ)
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // ทิ้งจังหวะระหว่างแถว 0.3 วินาที
        delayChildren: 0.2
      }
    }
  },
  // Item สำหรับแอนิเมชันของแต่ละชิ้น
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, // ปรับให้นุ่มนวลขึ้นจากเดิม 0.8
        ease: [0.16, 1, 0.3, 1] // Ease แบบค่อยๆ หยุด
      }
    }
  }
};

export const bgZoomEffect = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { 
    duration: 2, 
    ease: [0.16, 1, 0.3, 1] 
  }
};

// แอนิเมชันพิเศษสำหรับพวกหัวข้อ HELLO หรือชื่อ
export const revealText = {
  initial: (delay = 0) => ({ opacity: 0, y: 30 }),
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" }
  })
};