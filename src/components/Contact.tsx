import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="py-32 text-center">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Contact
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mb-14">
                I’m actively looking for entry-level opportunities in Software
                Development and AI Engineering. Feel free to connect with me through any
                of the platforms below.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8">
                {/* Email */}
                <a
                    href="mailto:bunnybhargav830@gmail.com"
                    className="flex items-center gap-4 px-6 py-4 rounded-xl border border-purple-800 bg-[#12081f]/70
                     hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
                     transition"
                >
                    <FiMail className="text-purple-400 text-xl" />
                    <span className="text-slate-200">
                        bunnybhargav830@gmail.com
                    </span>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/bhargav-deyyapu-b33a112a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-xl border border-purple-800 bg-[#12081f]/70
                     hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
                     transition"
                >
                    <FiLinkedin className="text-purple-400 text-xl" />
                    <span className="text-slate-200">
                        LinkedIn Profile
                    </span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/deyyapubhargav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-xl border border-purple-800 bg-[#12081f]/70
                     hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
                     transition"
                >
                    <FiGithub className="text-purple-400 text-xl" />
                    <span className="text-slate-200">
                        GitHub Profile
                    </span>
                </a>
            </div>
        </section>
    );
}
