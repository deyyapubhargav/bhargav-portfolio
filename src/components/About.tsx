export default function About() {
    return (
        <section
            id="about"
            onMouseEnter={() => window.setAvatarSection?.("projects")
            }
            className="py-32 max-w-4xl mx-auto"
        >
            <h2 className="text-4xl font-bold mb-12 text-center
                     bg-gradient-to-r from-violet-400 to-purple-400
                     bg-clip-text text-transparent">
                About Me
            </h2>

            {/* Client-focused intro (added, not replacing) */}
            <div className="mb-10 p-6 rounded-2xl bg-[#12081f]/70 border border-purple-800">
                <p className="text-slate-300 leading-relaxed">
                    Hi, I’m <span className="text-violet-400 font-semibold">Bhargav</span> —
                    a web developer who builds clean, responsive, and modern websites.
                    I help students and small businesses create fast, user-friendly
                    websites that look professional on all devices.
                </p>
            </div>

            {/* Existing background / journey */}
            <div className="space-y-6 text-slate-300 leading-relaxed text-[1.05rem]">
                <p>
                    I am a Computer Science Engineering graduate transitioning into an
                    early-career role as a Software and AI Engineer. My academic journey
                    and hands-on projects have helped me build intelligent systems,
                    modern web applications, and AI-powered solutions.
                </p>

                <p>
                    My major project,
                    <span className="text-violet-400 font-semibold"> Omnifera</span>,
                    is an LLM-based chatbot focused on contextual understanding,
                    scalable responses, and real-world usability.
                </p>

                <p>
                    Alongside AI, I work extensively with React, Tailwind CSS, and
                    modern frontend practices, following clean code standards,
                    Git-based workflows, and deployment-ready architectures.
                </p>
            </div>

            {/* Career focus */}
            <div className="mt-12 p-6 rounded-2xl bg-[#12081f]/70 border border-purple-800">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                    Career Focus & Opportunities
                </h3>

                <ul className="list-disc list-inside space-y-2 text-slate-300">
                    <li>Entry-level Software / AI Engineering roles</li>
                    <li>Freelance web development projects</li>
                    <li>AI chatbots, automation, and intelligent systems</li>
                    <li>Internships and learning-focused environments</li>
                </ul>
            </div>
        </section>
    );
}
