import { motion } from "framer-motion";

export default function AvatarMotion() {
    return (
        <motion.div
            className="relative w-48 h-64 mx-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Head */}
            <motion.div
                className="relative w-24 h-24 mx-auto rounded-full
                   bg-gradient-to-br from-violet-400 to-purple-500
                   shadow-lg"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                {/* Eyes */}
                <div className="absolute top-10 left-6 w-3 h-3 bg-black rounded-full" />
                <div className="absolute top-10 right-6 w-3 h-3 bg-black rounded-full" />

                {/* Eye blink */}
                <motion.div
                    className="absolute top-10 left-5 right-5 h-1 bg-purple-400 rounded"
                    animate={{ scaleY: [0, 0, 1, 0, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                />
            </motion.div>

            {/* Body */}
            <div className="w-32 h-32 mx-auto mt-2 rounded-2xl
                      bg-gradient-to-b from-purple-400/60 to-purple-800/40" />

            {/* Explaining arms */}
            <motion.div
                className="w-10 h-2 bg-violet-400 rounded-full absolute left-6 top-36"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="w-10 h-2 bg-violet-400 rounded-full absolute right-6 top-36"
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />
        </motion.div>
    );
}
