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
            src="https://picsum.photos/600/700"
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
          <h2 className="text-4xl font-semibold mb-6">
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

          {/* Skills */}
          <div className="space-y-6">
            {[
              ["Design", "85%"],
              ["HTML5", "90%"],
              ["CSS3", "97%"],
              ["WordPress", "88%"],
              ["Bootstrap", "92%"],
            ].map(([label, percent], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>{label}</span>
                  <span className="text-green-600">{percent}</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: percent }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-12 flex gap-4">
            <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              HIRE ME
            </button>

            <button className="px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition">
              DOWNLOAD CV
            </button>
          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}

export default About