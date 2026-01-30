import { motion } from "framer-motion";

export default function FutureFigure() {
    return (
        <motion.div
            className="absolute right-10 top-32 hidden lg:block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-40 h-80 rounded-full border border-violet-500
                   bg-gradient-to-b from-violet-500/30 to-purple-900/20
                   shadow-[0_0_60px_rgba(139,92,246,0.4)]"
            />

            {/* Head */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-24 h-24 mx-auto -mt-12 rounded-full
                   bg-gradient-to-br from-purple-500 to-violet-400
                   shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            />
        </motion.div>
    );
}
