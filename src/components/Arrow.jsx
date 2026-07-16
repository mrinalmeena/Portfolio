import { motion, AnimatePresence } from "framer-motion";

export default function Arrow({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 0.4,
            },
            y: {
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            bottom-[80px]
            right-[185px]
            flex
            flex-col
            items-center
            z-40
            pointer-events-none
          "
        >
          <p
            className="
              font-hand
              text-[#8B1E23]
              text-[28px]
            "
          >
            Drop me a message!
          </p>

          <motion.span
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="
              text-[42px]
              text-[#8B1E23]
              leading-none
            "
          >
            ↓
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}