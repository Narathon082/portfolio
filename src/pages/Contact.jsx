import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        setStatus("SUCCESS");
        setIsSending(false);
        form.current.reset(); // ล้างข้อมูลในฟอร์มหลังส่งสำเร็จ
    }, (error) => {
        setStatus("FAILED");
        setIsSending(false);
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <section id="contact" className="bg-[#f8f9fa] py-28 px-8 lg:px-24 scroll-mt-24 text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔥 Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-gray-900 uppercase tracking-tighter"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-green-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ✉️ LEFT FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div custom={0} variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">First name</label>
                <input name="user_firstname" type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:bg-white transition-all" />
              </motion.div>
              <motion.div custom={1} variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Last name</label>
                <input name="user_lastname" type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:bg-white transition-all" />
              </motion.div>
            </div>

            <motion.div custom={2} variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
              <input name="user_email" type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:bg-white transition-all" />
            </motion.div>

            <motion.div custom={3} variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
              <textarea name="message" rows="4" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:bg-white transition-all resize-none"></textarea>
            </motion.div>

            <motion.button
              custom={4}
              variants={itemVariants}
              disabled={isSending}
              whileHover={{ y: -3, backgroundColor: "#15803d" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all uppercase tracking-widest text-sm"
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>

            {/* แสดงข้อความแจ้งเตือนผลลัพธ์ */}
            {status === "SUCCESS" && <p className="text-green-600 font-bold text-center mt-4">✓ Email sent successfully!</p>}
            {status === "FAILED" && <p className="text-red-600 font-bold text-center mt-4">✗ Failed to send email. Please try again.</p>}
          </motion.form>

          {/* 📍 RIGHT INFO */}
          <motion.div
            className="lg:pt-10 space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                 <span className="w-8 h-[2px] bg-green-600" /> Contact Info
              </h3>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Feel free to reach out. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest">Email</h4>
                  <p className="text-gray-800 font-bold">info@narathon.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest">Location</h4>
                  <p className="text-gray-800 font-bold">Phuket, Thailand</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;