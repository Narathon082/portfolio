import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      className="bg-gray-100 py-24 px-8 lg:px-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <img
            src="/images/g0.png"
            alt="Profile"
            className="rounded shadow-lg w-full"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">
            My Bio
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex gap-4">
            <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              HIRE ME
            </button>
      
            <a href="file/Narathon_Nu-muang_CV.pdf" download>
              <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                DOWNLOAD CV
              </button>
            </a>
          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}

export default About