import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import useSpriteAnimation from "../hooks/useSpriteAnimation";
import SpeechBubble from "./SpeechBubble";


/* ---------- IMPORT SPRITES ---------- */

import frame1 from "../assets/sprite/frame1.png";
import frame2 from "../assets/sprite/frame2.png";
import frame3 from "../assets/sprite/frame3.png";
import frame4 from "../assets/sprite/frame4.png";
import frame5 from "../assets/sprite/frame5.png";
import frame6 from "../assets/sprite/frame6.png";
import frame7 from "../assets/sprite/frame7.png";
import frame8 from "../assets/sprite/frame8.png";
import frame9 from "../assets/sprite/frame9.png";
import frame10 from "../assets/sprite/frame10.png";
import frame11 from "../assets/sprite/frame11.png";
import frame12 from "../assets/sprite/frame12.png";
import frame13 from "../assets/sprite/frame13.png";
import frame14 from "../assets/sprite/frame14.png";
import frame15 from "../assets/sprite/frame15.png";
import frame16 from "../assets/sprite/frame16.png";
import frame17 from "../assets/sprite/frame17.png";
import frame18 from "../assets/sprite/frame18.png";


const walkFrames = [
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
];

const waveFrames = [
  frame10,
  frame11,
  frame10,
  frame11,
  frame15,
];

const idleFrames = [
  frame1,
];

const blinkFrames = [
  frame16,
  frame17,
  frame18,
  frame1,
];




export default function PixelGuide() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, setState] = useState("walk");

  const [bubbleVisible, setBubbleVisible] = useState(false);



  const [xPos, setXPos] = useState(420);

  const [facingLeft, setFacingLeft] = useState(true);

  const currentFrames = useMemo(() => {

    switch (state) {

      case "walk":
        return walkFrames;

      case "wave":
        return waveFrames;

      case "blink":
        return blinkFrames;

      default:
        return idleFrames;

    }

  }, [state]);

  const sprite = useSpriteAnimation(currentFrames, 120);



  useEffect(() => {

    if (!inView) return;

    setState("walk");
    setXPos(0);

    const walk = setTimeout(() => {
      setState("wave");
    }, 2600);

    const wave = setTimeout(() => {

      setState("idle");

      setBubbleVisible(true);

    }, 4200);

    // Walk back out after showing everything
    const walkBack = setTimeout(() => {
      setBubbleVisible(false);
      setFacingLeft(false);
      setState("walk");
      setXPos(420);
    }, 14000);

    return () => {

      clearTimeout(walk);
      clearTimeout(wave);
      clearTimeout(walkBack);

    };

  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0">
    <motion.div

      initial={{
        x: 420
      }}

      animate={{

        x: xPos,

        y:
          state === "walk"
            ? [0, -3, 0]
            : [0, -2, 0]

      }}

      transition={{

        x: {
          duration: 2.6,
          ease: "easeInOut"
        },

        y: {
          duration: 2,
          repeat: Infinity
        }

      }}

      className="
absolute
bottom-0
right-20
z-30
w-[165px]
select-none
pointer-events-none
"

    >

      <img
        src={sprite}
        alt="Pixel Guide"
        className="w-full"
        style={{
          imageRendering: "pixelated",
          transform: facingLeft ? "scaleX(-1)" : "scaleX(1)",
          transition: "transform 0.15s ease"
        }}
      />

      <SpeechBubble
        visible={bubbleVisible}
      />

    </motion.div>
    </div>

  )
};