import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#edece7] py-28 overflow-hidden"
    >

      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* Top Left Pink Watercolor */}

      <img
        src={`${import.meta.env.BASE_URL}images/watercolor-pink.png`}
        alt=""
        className="
          absolute
          -left-36
          -top-24
          w-[620px]
          opacity-70
          pointer-events-none
          select-none
        "
      />

      {/* Bottom Right Pink Watercolor */}

      <img
        src={`${import.meta.env.BASE_URL}images/watercolor-pink.png`}
        alt=""
        className="
          absolute
          -right-32
          bottom-0
          w-[720px]
          opacity-70
          pointer-events-none
          select-none
        "
      />

      {/* ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">

        {/* ================= TOP LAYOUT ================= */}

        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-20">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              rotate: -6,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Watercolor behind Heading */}

            <img
              src={`${import.meta.env.BASE_URL}images/mixwatercolor.png`}
              alt=""
              className="
                absolute
                -left-14
                -top-10
                w-[470px]
                opacity-100
                pointer-events-none
                -z-10
              "
            />

            <h2
              className="
                font-hand
                text-black
                text-[70px]
                leading-[0.92]
              "
            >
              Education,
              <br />
              Certification &
              <br />
              Others Works
            </h2>

          </motion.div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <div>
              <h3
                className="
                  font-serif
                  font-bold
                  text-[34px]
                  text-[#2D2520]
                "
              >
                Bachelor of Technology in Computer Science Engineering
              </h3>

              <p
                className="
                  mt-4
                  text-[21px]
                  text-[#5A463D]
                "
              >
                Delhi Technological University
              </p>

              <p
                className="
                  mt-1
                  text-[#8B1E23]
                  font-semibold
                "
              >
                Expected Graduation • 2029
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= MIDDLE SECTION - OPEN SOURCE + IEEE AWARD ================= */}
        <div className="flex gap-14 items-start mt-16">

          {/* OPEN SOURCE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -8,
              rotate: -2,
            }}
            className="
              w-[260px]
              bg-white
              p-7
              rounded-3xl
              shadow-xl
              border
              border-[#8B1E23]/10
              self-start
            "
          >
            <h3
              className="
                font-serif
                font-bold
                text-[28px]
                text-[#2D2520]
                mb-5
              "
            >
              Open Source
            </h3>

            <p
              className="
                text-[#5A463D]
                leading-8
              "
            >
              Contributor at
              GirlScript Summer of Code
              (GSSoC 2026),
              collaborating on
              production-level repositories,
              fixing bugs,
              implementing features
              and working with maintainers.
            </p>
          </motion.div>

          {/* IEEE + IMAGE WRAPPER */}
          <div className="flex-1 flex items-center gap-12">

            {/* IEEE TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <h3
                className="
                  font-serif
                  font-bold
                  text-[34px]
                  text-[#2D2520]
                  mb-6
                "
              >
                IEEE Team Award
                Winner — Vihaan 9.0
              </h3>

              <p
                className="
                  text-[#5A463D]
                  text-[18px]
                  leading-9
                "
              >
                Awarded the IEEE Team Award at
                Vihaan 9.0,
                DTU's flagship national hackathon,
                for developing an AI-powered
                deepfake audio detection system
                capable of combating
                voice-cloning fraud
                and AI-enabled scams.
              </p>
            </motion.div>

            {/* POLAROID IMAGE */}
            <motion.div
              whileHover={{
                rotate: -3,
                y: -10,
                scale: 1.04,
                filter: "grayscale(100%)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="w-[400px] flex-shrink-0"
            >
              <div
                className="
                  relative
                  bg-white
                  p-4
                  shadow-[12px_12px_0px_rgba(70,57,52,0.45)]
                  rotate-[-2deg]
                "
              >
                {/* Tape */}
                <div
                  className="
                    absolute
                    -top-3
                    right-10
                    w-16
                    h-5
                    bg-[#F8EDB2]
                    rotate-45
                    opacity-90
                  "
                />

                <div
                  className="
                    absolute
                    bottom-6
                    -left-5
                    w-16
                    h-5
                    bg-[#F8EDB2]
                    rotate-45
                    opacity-90
                  "
                />

                <img
                  src={`${import.meta.env.BASE_URL}images/hero-banner-full.png`}
                  alt="IEEE Team Award"
                  className="
                    w-full
                    h-auto
                    rounded-sm
                  "
                />

                <p
                  className="
                    mt-5
                    text-center
                    font-semibold
                    text-[#8B1E23]
                  "
                >
                  IEEE Team Award • Vihaan 9.0
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION - THREE COLUMNS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-10 w-full mt-28"
        >

          {/* COLUMN 1 - CERTIFICATES */}
          <div className="bg-white p-7 rounded-3xl shadow-xl border border-[#8B1E23]/10">
            <h3
              className="
                font-serif
                font-bold
                text-[30px]
                text-[#2D2520]
                mb-8
              "
            >
              Professional Certificates
            </h3>

            <div className="space-y-8">

              <div>
                <h4 className="font-semibold text-[#8B1E23] text-lg">
                  Meta
                </h4>

                <ul className="mt-3 space-y-2 text-[#5A463D] leading-8">
                  <li>• Backend Developer Professional Certificate</li>
                  <li>• Front-End Developer Professional Certificate</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#8B1E23] text-lg">
                  IBM
                </h4>

                <ul className="mt-3 space-y-2 text-[#5A463D] leading-8">
                  <li>• Machine Learning with Python</li>
                  <li>• Deep Learning with Python</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#8B1E23] text-lg">
                  Google
                </h4>

                <ul className="mt-3 text-[#5A463D] leading-8">
                  <li>• Data Analytics Professional Certificate</li>
                </ul>
              </div>

            </div>
          </div>

          {/* COLUMN 2 - IEEE */}
          <div className="bg-white p-7 rounded-3xl shadow-xl border border-[#8B1E23]/10">
            <h3
              className="
                font-serif
                font-bold
                text-[30px]
                text-[#2D2520]
                mb-8
              "
            >
              Executive, IEEE DTU
            </h3>

            <p
              className="
                text-[#5A463D]
                leading-9
              "
            >
              Serve as an Executive at IEEE DTU,
              contributing to sponsorships,
              hackathons,
              workshops,
              technical events
              and industry collaborations.
            </p>

            <h3
              className="
                font-serif
                font-bold
                text-[30px]
                text-[#2D2520]
                mb-8
                mt-12
              "
            >
              Member, Cognitive Minds (DTU)
            </h3>

            <p
              className="
                text-[#5A463D]
                leading-9
              "
            >
             
Represent DTU in inter-collegiate debate competitions,
developing public speaking, critical reasoning,
policy analysis and structured argumentation while
competing with universities across India.
            </p>


          </div>

          {/* COLUMN 3 - COMPETITIVE PROGRAMMING */}
          <div className="bg-white p-7 rounded-3xl shadow-xl border border-[#8B1E23]/10">
            <h3
              className="
                font-serif
                font-bold
                text-[30px]
                text-[#2D2520]
                mb-8
              "
            >
              Competitive Programming
            </h3>

            <p
              className="
                text-[#5A463D]
                leading-9
              "
            >
              Solved 150+ LeetCode problems across arrays,
strings, linked lists, trees, graphs, heaps,
dynamic programming and greedy algorithms.

Consistently practice data structures and algorithms
to strengthen analytical thinking, optimize solutions
and prepare for competitive programming and software
engineering interviews.
            </p>
          </div>

        </motion.div>

        {/* ================= DECORATIONS - BUTTERFLIES ================= */}



        {/* ================================================= */}
        {/* DECORATIONS */}
        {/* ================================================= */}

        {/* Butterfly 1 */}

        <motion.img
          src={`${import.meta.env.BASE_URL}images/butterfly.png`}
          alt=""
          className="
            absolute
            top-36
            right-48
            w-12
            pointer-events-none
          "
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

      

      </div>


    </section>

  );
}

