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

export const fastFadeUp = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // ✅ ลดจาก 0.1 เหลือ 0.05 (เด้งต่อกันไวขึ้น)
        delayChildren: 0.1     // ✅ ลดจาก 0.2 เหลือ 0.1 (เริ่มไวขึ้น)
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 15 }, // ✅ ลดระยะการโยนตัว (y) ลงเพื่อให้ดูเร็วขึ้น
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, // ✅ ลดจาก 1.5 เหลือ 0.5 (จบไวขึ้นเยอะ!)
        ease: [0.25, 1, 0.5, 1] 
      },
    },
  },
};