import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function WhoAmI() {
  const [typingDone, setTypingDone] = useState(false);
  return (
    <section
      id="about"
      className="relative bg-[#edece7] py-24 overflow-hidden"
    >
      {/* Watercolor Decorations */}
      {/* Pink Watercolor */}
<img
  src={`${import.meta.env.BASE_URL}images/watercolor-pink.png`}
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
  src={`${import.meta.env.BASE_URL}images/watercolor-orange.png`}
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

    <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

 {/* LEFT SIDE */}
<motion.div
  initial={{ x: -120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2
    className="
      font-sans
      text-[#5A463D]
      font-light
      text-[56px]
      md:text-[72px]
      leading-none
      mb-8
    "
  >
    Who Am I??
  </h2>

  <p
    className="
      text-[#5A463D]
      text-[22px]
      md:text-[28px]
      leading-[1.55]
      font-light
      max-w-[760px]
    "
  >
    <Typewriter
      words={[
        `I'm a Computer Engineering student at Delhi Technological University with a passion for building intelligent software and solving meaningful problems. My interests lie in AI, software engineering, and cybersecurity, where I enjoy turning ideas into impactful products through research, innovation, and hands-on development. Outside the classroom, I actively participate in hackathons, contribute to open source, and continuously learn new technologies to grow as an engineer.`,
      ]}
      loop={1}
      cursor
      cursorStyle="|"
      typeSpeed={10}
      deleteSpeed={0}
      delaySpeed={999999}
      onLoopDone={() => setTypingDone(true)}
    />
  </p>

  {typingDone && (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 text-right font-hand text-5xl text-[#6B4E3D]"
    >
      — Mrinal Meena
    </motion.p>
  )}
</motion.div>

            

          {/* RIGHT SIDE */}
          <div className="flex justify-center reveal reveal-delay-2">

            <div
              className="
                relative
                bg-white
                p-5
                shadow-[12px_12px_0px_rgba(70,57,52,0.55)]
                w-[430px]
              "
            >
<motion.div
  initial={{ rotate: 4 }}
  whileHover={{
    rotate: 0,
    y: -8,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 220,
    damping: 18,
  }}
  className="
    relative
    bg-white
    p-5
    shadow-[12px_12px_0px_rgba(70,57,52,0.45)]
    w-[430px]
    cursor-pointer
  "
>
  <motion.img
    src={`${import.meta.env.BASE_URL}images/profile-photo-polaroid.png`}
    alt="Mrinal Meena"
    className="w-full h-[470px] object-cover"
    initial={{ filter: "grayscale(100%)" }}

whileHover={{
  filter: "grayscale(0%)",
}}
    transition={{ duration: 0.45 }}
  />
</motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}