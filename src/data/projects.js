// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "สุดยอดนวัตกรรมอาชีวะ",
    description: "สิ่งประดิษฐ์ด้านนวัตกรรมและเทคโนโลยีเพื่อสุขภาพเป็นอุปกรณ์เซนเซอร์วัดตรวจจับการเปิดตู้อบทารกแรกเกิด",
    images: ["./imgporject/320973949_692411232507221_8833424028504039932_n.jpg","./imgporject/321094867_826304315139148_2883596032705830828_n.jpg","./imgporject/FB_IMG_1700270553660.jpg","./imgporject/CCI10102566_0003.jpg"], 
    tech: ["Arduino", "C/C++"],
  },
    {
    id: 2,
    title: "งานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทยระดับจังหวัด ประจำปี 2565",
    description: "เน้นการปฏิบัติจริงในด้านการจัดการระบบเครือข่าย กำหนดค่า Router/Switch,VLAN การรักษาความปลอดภัย Wi-Fi",
    images: ["./imgporject/404387119_874448211134870_5979465591870673118_n.jpg", "./imgporject/CCI10102566_0005.jpg"], 
    tech: ["Router/Switch", "VLAN", "Wi-Fi Security"],
  },
    {
    id: 3,
    title: "งานประชุมวิชาการองค์การนักวิชาชีพแห่งอนาคตประเทศไทยระดับสถานศึกษา ประจำปี 2566",
    description: "การติดตั้งระบบเครือข่าย การเข้าหัวสายสัญญาณ การกำหนด IP Address, Router, การรักษาความปลอดภัย",
    images: ["./imgporject/1700447177946.jpg"], 
    tech: ["Straight-through", "Cross-over", "Network Security"],
  },
    {
    id: 4,
    title: "เกียรติบัตร",
    description: "ได้รับการยกย่องด้านวิชาการมีผลการเรียนมากกว่า 3.80 ขึ้นไป",
    images: ["./imgporject/CCI10102566_0004.jpg"], 
    tech: ["certificate"],
  },
    {
    id: 5,
    title: "การแข่งขันทักษะวิชาชีพและทักษะพื้นฐานระดับ สถานศึกษา",
    description: "ทักษะการจัดการ Cloud Computing, การพัฒนาโครงสร้างพื้นฐานผ่าน DevOps, และการจัดการระบบเครือข่ายความปลอดภัย",
    images: ["./imgporject/FB_IMG_1700269782884.jpg","./imgporject/CCI10102566_0006.jpg"],                                    
    tech: ["Cloud Computing", "DevOps", "Network Security"],
  },
    {
    id: 6,
    title: "การแข่งขันทักษะวิชาชีพและทักษะพื้นฐานระดับ อาชีวศึกษาจังหวัดภูเก็ต",
    description: "ทักษะระบบเครือข่ายคอมพิวเตอร์ และทักษะการจัดการการออกแบบและติดตั้งระบบ",
    images: ["./imgporject/CCI10102566_0007.jpg"], 
    tech: ["Network Design", "System Installation"],
  },
    {
    id: 7,
    title: "ประกวดแข่งขันสุดยอดนวัตกรรมสิ่งประดิษฐ์เชิงอุตสาหกรรมา",
    description: "โดยอุปกรณ์จะเป็นการปั่นใบกัญชาให้ละเอียดและสกัดสารสำคัญออกมาเป็นเครื่องดื่มเพื่อสุขภาพ โดยมีการควบคุมอุณหภูมิและเวลาในการปั่นเพื่อให้ได้สารสกัดที่มีคุณภาพสูงสุด",
    images: ["./imgporject/received_280873044276206.jpg", "./imgporject/received_562205492751384.jpeg"], 
    tech: ["arduino", "C/C++", "water pump", "temperature sensor", "timers"],
  },
  {
    id: 8,
    title: "Project Game Mortal Edge",
    description: "Project ระดับปวส ทำ Animation และก็ปั้นโมเดลต่างๆภายในตัวเกมแนว Action RPG ที่มีเนื้อเรื่องเกี่ยวกับการผจญภัยในโลกแฟนตาซีที่เต็มไปด้วยอันตรายและความลึกลับ ผู้เล่นจะได้รับบทเป็นนักรบที่ต้องต่อสู้กับศัตรูและสำรวจดินแดนต่างๆเพื่อค้นหาความลับและความจริงที่ซ่อนอยู่ในโลกของ Mortal Edge",
    video: "./imgporject/Mortal Edge Trailer.mp4",
    tech: ["unreal engine 5", "3D modeling", "animation", "game design"],
  }
];

export default projects;