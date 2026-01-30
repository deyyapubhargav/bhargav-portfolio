import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    return (
        <section
            id="contact"
            onMouseEnter={() => window.setAvatarSection?.("projects")
            }
            className="py-32 text-center"
        >
            <h2 className="text-4xl font-bold mb-12
                     bg-gradient-to-r from-violet-400 to-purple-400
                     bg-clip-text text-transparent">
                Contact Me for a Free Website Review
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mb-14">
                If you’d like to discuss an opportunity, collaboration,
                or freelance project, feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8">
                <a
                    href="mailto:bunnybhargav830@gmail.com"
                    className="flex items-center gap-4 px-6 py-4 rounded-xl
                     border border-purple-800 bg-[#12081f]/70
                     hover:border-violet-400 transition"
                >
                    <FiMail className="text-purple-400 text-xl" />
                    <span className="text-slate-200">
                        bunnybhargav830@gmail.com
                    </span>
                </a>

                <a
                    href="https://www.linkedin.com/in/bhargav-deyyapu-b33a112a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-xl
                     border border-purple-800 bg-[#12081f]/70
                     hover:border-violet-400 transition"
                >
                    <FiLinkedin className="text-purple-400 text-xl" />
                    <span className="text-slate-200">
                        LinkedIn Profile
                    </span>
                </a>

                <a
                    href="https://github.com/deyyapubhargav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-xl
                     border border-purple-800 bg-[#12081f]/70
                     hover:border-violet-400 transition"
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
