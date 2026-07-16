import { motion, AnimatePresence } from "framer-motion";

export default function SpeechBubble({
  visible,
  text,
  className = "",
}) {
  return (
    <AnimatePresence>

      {visible && (

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.3,
            scaleY: 0.3,
            y: 30,
          }}

          animate={{
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scaleX: 0.5,
            scaleY: 0.5,
            y: 20,
          }}

          transition={{
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}

          style={{ transformOrigin: "bottom right" }}

          className={`
            absolute
            bottom-[170px]
            right-[120px]
            z-50
            ${className}
          `}
        >

          {/* Bubble */}

          <div
            className="
              relative
              bg-white
              rounded-3xl
              px-6
              py-5
              shadow-2xl
              border
              border-[#8B1E23]/15
              max-w-[320px]
            "
          >

            <p
              className="
                whitespace-pre-line
                text-[#4F443D]
                leading-7
                text-[16px]
              "
            >
              {text}
            </p>

            {/* Bubble Tail */}

            <div
              className="
                absolute
                bottom-[-10px]
                right-10
                w-5
                h-5
                bg-white
                rotate-45
                border-r
                border-b
                border-[#8B1E23]/15
              "
            />

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}