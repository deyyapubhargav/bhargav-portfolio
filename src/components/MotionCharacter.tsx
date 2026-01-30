import { motion } from "framer-motion";

export default function MotionCharacter() {
    return (
        <div className="absolute right-12 top-28 hidden lg:block pointer-events-none">
            {/* Body */}
            <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-44 h-80 rounded-full
                   bg-gradient-to-b from-violet-500/30 to-purple-900/20
                   border border-violet-500
                   shadow-[0_0_60px_rgba(139,92,246,0.45)]"
            >
                {/* Chest glow */}
                <div className="absolute inset-6 rounded-full
                        bg-gradient-to-br from-purple-400/20 to-transparent" />
            </motion.div>

            {/* Head */}
            <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto -mt-16 w-28 h-28 rounded-full
                   bg-gradient-to-br from-purple-500 to-violet-400
                   border border-purple-300
                   shadow-[0_0_45px_rgba(168,85,247,0.65)]"
            />
        </div>
    );
}
