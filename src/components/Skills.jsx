import React from "react";
import { motion } from "framer-motion";
import { HangingPlant, WavyLine } from "./Decorations";

const skillColumns = [
  {
    title: "Programming & Core CS",
    items: [
      "Python",
      "C++",
      "JavaScript",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Problem Solving",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "RAG",
      "LLMs",
      "Prompt Engineering",
      "Model Optimization",
    ],
  },
  {
    title: "Development & Tools",
    items: [
      "HTML5",
      "CSS3",
      "React.js",
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "Git & GitHub",
      "Gradio",
      "Chart.js",
      "JavaScript",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#edece7] py-24 overflow-hidden"
    >
      {/* Watercolor */}
      <img
  src="/images/watercolor-pink.png"
  alt=""
  className="
    absolute
    -top-32
    -left-32
    w-[900px]
    opacity-70
    pointer-events-none
    select-none
    z-0
  "
/>

{/* Orange Watercolor */}
<img
  src="/images/watercolor-orange.png"
  alt=""
  className="
    absolute
    -bottom-48
    -right-44
    w-[1000px]
    opacity-75
    pointer-events-none
    select-none
    z-0
  "
/>

      {/* Plant */}
      <HangingPlant
        className="
          absolute
          -top-8
          right-8
          scale-[2]
          origin-top
          animate-sway
          z-20
        "
      />

      {/* Butterflies */}
      <img
        src="/images/butterfly.png"
        alt=""
        className="absolute top-20 right-52 w-14 animate-float z-20"
      />

      <img
        src="/images/butterfly.png"
        alt=""
        className="absolute top-48 right-10 w-10 rotate-12 animate-float z-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16"
        >
          <h2 className="text-[#8B1E23] text-6xl font-light">
            <b>My Skill</b>
          </h2>

          <p className="text-[#8B1E23] text-2xl mt-2">
            What I Know!
          </p>
        </motion.div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-12">

          {skillColumns.map((col, index) => (

            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
            >
              <h3 className="text-[#8B1E23] text-3xl font-bold mb-6">
                {col.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {col.items.map((item) => (

                  <motion.button
                    key={item}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      rotate: 1,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#8B1E23]/30
                      bg-white/70
                      text-[#5A463D]
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-[#8B1E23]
                      hover:text-white
                      hover:shadow-xl
                      hover:ring-2
                      hover:ring-[#d9b4b4]
                    "
                  >
                    {item}
                  </motion.button>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      <WavyLine className="absolute bottom-10 right-10 opacity-40" />

    </section>
  );
}