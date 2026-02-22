import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../data/contactData";
import { fastFadeUp } from "../data/animations";
import "../css/Contact.css";

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
    .then(() => {
        setStatus("SUCCESS");
        setIsSending(false);
        form.current.reset();
    }, () => {
        setStatus("FAILED");
        setIsSending(false);
    });
  };

  return (
    <section id="contact" className="contact-container">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-5xl font-black text-gray-900 uppercase tracking-tighter">
            {contactData.title}
          </motion.h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "80px" }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="h-1.5 bg-yellow-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ✉️ LEFT FORM */}
          <motion.form ref={form} onSubmit={sendEmail} className="contact-form-card" variants={fastFadeUp.container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fastFadeUp.item} className="flex flex-col gap-2">
                <label className="contact-label">First name</label>
                <input name="user_firstname" type="text" required className="contact-input" />
              </motion.div>
              <motion.div variants={fastFadeUp.item} className="flex flex-col gap-2">
                <label className="contact-label">Last name</label>
                <input name="user_lastname" type="text" required className="contact-input" />
              </motion.div>
            </div>

            <motion.div variants={fastFadeUp.item} className="flex flex-col gap-2">
              <label className="contact-label">Email Address</label>
              <input name="user_email" type="email" required className="contact-input" />
            </motion.div>

            <motion.div variants={fastFadeUp.item} className="flex flex-col gap-2">
              <label className="contact-label">Message</label>
              <textarea name="message" rows="4" required className="contact-input resize-none"></textarea>
            </motion.div>

            <motion.button variants={fastFadeUp.item} disabled={isSending} whileHover={{ y: -3, backgroundColor: "#d97706" }} whileTap={{ scale: 0.98 }} className="contact-btn">
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "SUCCESS" && <p className="text-yellow-600 font-bold text-center mt-4">✓ Email sent successfully!</p>}
            {status === "FAILED" && <p className="text-red-600 font-bold text-center mt-4">✗ Failed to send email.</p>}
          </motion.form>

          {/* 📍 RIGHT INFO */}
          <motion.div className="lg:pt-10 space-y-12" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                 <span className="w-8 h-[2px] bg-yellow-600" /> Contact Info
              </h3>
              <p className="text-gray-500 mb-12 leading-relaxed">{contactData.description}</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-600 shadow-md">
                   <EmailIcon />
                </div>
                <div>
                  <h4 className="contact-label">Email</h4>
                  <p className="text-gray-800 font-bold">{contactData.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-600 shadow-md">
                   <LocationIcon />
                </div>
                <div>
                  <h4 className="contact-label">Location</h4>
                  <p className="text-gray-800 font-bold">{contactData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Svg Helpers (นำ Svg เดิมของคุณมาใส่ที่นี่)
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  </svg>
);

export default Contact;