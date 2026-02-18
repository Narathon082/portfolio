import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-28 px-8 lg:px-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Title */}
        <motion.h2
          className="text-4xl font-semibold text-center mb-20 text-gray-800"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT FORM */}
          <motion.form
            className="space-y-8"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* First + Last */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["First name", "Last name"].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder={label}
                    className="w-full bg-transparent border-b border-gray-400 py-2 outline-none text-gray-800"
                  />
                </motion.div>
              ))}
            </div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none text-gray-800"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-400 py-2 outline-none text-gray-800 resize-none"
              ></textarea>
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              className="mt-6 px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              SEND MESSAGE
            </motion.button>

          </motion.form>

          {/* RIGHT CONTACT INFO */}
          <motion.div
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Contact Info
            </h3>

            <p>📍 43 Raymouth Rd. Baltimore, London 3910</p>
            <p>📞 +1(123)-456-7890</p>
            <p>✉️ info@mydomain.com</p>
            <p>🌐 https://colorlib.com</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
