import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center text-center">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
                Deyyapu Bhargav
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-xl text-slate-400"
            >
                AI Engineer · LLM & Chatbot Developer · Web Developer
            </motion.p>

            <div className="mt-12 flex justify-center gap-6">
                <a
                    href="#projects"
                    className="bg-purple-500 hover:bg-purple-400 text-black px-8 py-3 rounded-xl font-semibold transition"
                >
                    View Projects
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-500 px-8 py-3 rounded-xl text-purple-400 hover:bg-purple-500 hover:text-black transition"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}
