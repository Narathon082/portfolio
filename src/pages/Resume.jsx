import { motion } from "framer-motion"

function Resume() {
  return (
    <section
      id="resume"
      className="bg-gray-100 py-28 px-8 lg:px-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Resume Title */}
        <motion.h2
          className="text-4xl font-semibold text-center mb-20 text-gray-800"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* 🖼 รูป Slide จากล่างขึ้นบน */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/600/700"
              alt="Resume"
              className="rounded shadow-lg w-full"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2">

            {/* Work Experience */}
            <motion.h3
            className="text-3xl font-semibold mb-10 text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            Work Experience
            </motion.h3>


            <div className="space-y-10 mb-20 text-gray-700">

              {[
                {
                  title: "Senior Front End Developer",
                  company: "Facebook, Inc. • San Francisco",
                  date: "November 2019 - Present",
                  type: "FULLTIME"
                },
                {
                  title: "Front-end Engineer",
                  company: "Google, Inc. • San Francisco",
                  date: "March 2015 - November 2019",
                  type: "PART TIME"
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-300 pb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold">
                      {job.title}
                    </h4>
                    <span className="text-xs px-4 py-1 bg-green-100 text-green-600 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mt-3">
                    <span>{job.company}</span>
                    <span>{job.date}</span>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* กEducation */}
            <motion.h3
            className="text-3xl font-semibold mb-10 text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            >
            Education
            </motion.h3>


            <div className="space-y-10 text-gray-800">

              {[
                {
                  degree: "Master in Software Engineering",
                  school: "Columbia University",
                  date: "2015 - 2017"
                },
                {
                  degree: "Bachelor in Software Engineering",
                  school: "Harvard University",
                  date: "2011 - 2015"
                }
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-300 pb-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold">
                    {edu.degree}
                  </h4>

                  <div className="flex justify-between text-sm text-gray-600 mt-3">
                    <span>{edu.school}</span>
                    <span>{edu.date}</span>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
