import React from "react";
import { motion } from "framer-motion";
import PixelGuide from "./PixelGuide";


const contactRows = [
  {
    label: "GITHUB",
    value: "https://github.com/mrinalmeena",
    href: "https://github.com/mrinalmeena",
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "https://www.linkedin.com/in/mrinal-meena-6b9667378/",
    href: "https://www.linkedin.com/in/mrinal-meena-6b9667378/",
    external: true,
  },
  {
    label: "PHONE",
    value: "9871006025",
    href: "tel:9871006025",
    external: false,
  },
  {
    label: "EMAIL",
    value: "mrinalmeena25@gmail.com",
    href: "mailto:mrinalmeena25@gmail.com",
    external: false,
  },
];


export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#edece7] overflow-hidden pt-24 pb-20"
    >
      {/* Watercolor */}
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

      {/* Butterflies */}
      <img
        src={`${import.meta.env.BASE_URL}images/butterfly.png`}
        alt=""
        className="absolute top-20 right-52 w-14 animate-float z-20"
      />

      <img
        src={`${import.meta.env.BASE_URL}images/butterfly.png`}
        alt=""
        className="absolute top-48 right-10 w-10 rotate-12 animate-float z-20"
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-[1fr_430px] gap-16 items-start">

          <div>
            <motion.h2
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="font-serif font-bold text-5xl text-[#2D2520] mb-14"
            >
              Get in Touch
            </motion.h2>

            <motion.div
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
            >
              {contactRows.map((row,index)=>(
                <motion.div
  key={row.label}
  whileHover={{
    x: 10,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 18,
  }}
  className={`flex gap-8 items-center py-5 ${
    index !== contactRows.length - 1
      ? "border-b border-[#8B1E23]/15"
      : ""
  }`}
>

                  <span className="w-28 text-sm tracking-[0.18em] font-semibold text-[#8B1E23]">
                    {row.label}
                  </span>

                  <motion.a
  href={row.href}
  target={row.external ? "_blank" : undefined}
  rel={row.external ? "noopener noreferrer" : undefined}
  whileHover={{
    x: 8,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  className="
    text-[#4F443D]
    text-lg
    hover:text-[#8B1E23]
    transition-colors
  "
>
  {row.value}
</motion.a>

                </motion.div>
              ))}
            </motion.div>

          </div>

          <div className="relative min-h-[560px] flex flex-col items-center">

            <div className="absolute inset-0">
              <PixelGuide/>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
