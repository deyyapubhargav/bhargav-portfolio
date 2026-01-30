import { motion } from "framer-motion";
import { useState } from "react";

const messages: Record<string, string> = {
    hero: "Hi! I'm Bhargav. Let me show you what I build.",
    about: "Here you can learn more about my background and focus.",
    skills: "These are the skills I use to deliver real results.",
    projects: "These are projects I’ve built end to end.",
    contact: "Let’s connect and work together.",
};

export default function AvatarGuide() {
    const [active, setActive] = useState<keyof typeof messages>("hero");

    // expose setter globally (simple & safe)
    (window as any).setAvatarSection = (section: keyof typeof messages) => {
        setActive(section);
    };

    return (
        <div className="fixed right-8 bottom-24 hidden lg:block z-40">
            {/* Speech bubble */}
            <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4 max-w-xs p-4 rounded-xl
                   bg-[#12081f]/90 border border-purple-700
                   text-slate-200 text-sm shadow-lg"
            >
                {messages[active]}
            </motion.div>

            {/* Avatar */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-28 h-40 mx-auto"
            >
                {/* Head */}
                <motion.div
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-20 h-20 mx-auto rounded-full
                     bg-gradient-to-br from-violet-500 to-purple-400
                     shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                />

                {/* Body */}
                <div
                    className="w-24 h-24 mx-auto mt-2 rounded-xl
                     bg-gradient-to-b from-purple-500/40 to-purple-900/20
                     border border-purple-600"
                />

                {/* Explaining hand */}
                <motion.div
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute right-[-10px] top-24 w-10 h-3
                     bg-violet-400 rounded-full"
                />
            </motion.div>
        </div>
    );
}
