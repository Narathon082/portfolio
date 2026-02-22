import { FileText, Eye } from "lucide-react";

export const aboutData = {
  firstName: "Narathon",
  lastName: "Nu-muang",
  image: "images/g0.png", 
  bio: [
    {
      id: 1,
      text: "Industrial Technology student at KMUTNB, specializing in Electronic Engineering Technology I am passionate about building efficient applications and solving complex technical problems through code. With a strong foundation in electronic systems, I enjoy bridging the gap between hardware and software to create innovative digital solutions.",
      highlight: "KMUTNB"
    },
    {
      id: 2,
      text: "Continuously learning about emerging technologies. My goal is to leverage my background in network infrastructure and IT support to build secure, efficient systems that empower businesses. I thrive in collaborative environments and am always looking for new challenges in the world of IT operations."
    }
  ],
  fileButtons: [
    {
      label: "View Transcript",
      path: "/portfolio/file/Narathon_Nu-muang_Transcript.pdf", 
      icon: <FileText size={18} />
    },
    {
      label: "View Portfolio / CV",
      path: "/portfolio/file/Narathon_Nu-muang_CV.pdf", 
      icon: <Eye size={18} />
    }
  ]
};