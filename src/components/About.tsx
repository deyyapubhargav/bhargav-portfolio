export default function About() {
    return (
        <section id="about" className="py-32 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                About Me
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed text-[1.05rem]">
                <p>
                    I am a Computer Science Engineering graduate actively transitioning into
                    an early-career role as a Software and AI Engineer. My academic journey
                    and projects have given me hands-on exposure to building intelligent
                    systems, modern web applications, and AI-powered solutions.
                </p>

                <p>
                    My primary interest lies in Artificial Intelligence, particularly Large
                    Language Models and conversational systems. As part of my major project,
                    <span className="text-violet-400 font-semibold">
                        {" "}Omnifera
                    </span>, I designed and developed an LLM-based chatbot focused on
                    contextual understanding, scalable responses, and real-world usability.
                    This project strengthened my understanding of AI workflows, backend
                    logic, and frontend integration.
                </p>

                <p>
                    Alongside AI, I have a solid foundation in web development using React,
                    TypeScript, and Tailwind CSS, and I follow best practices such as clean
                    component structure, version control with Git, and deployment-ready
                    workflows. I enjoy turning ideas into reliable, user-focused applications.
                </p>

                {/* Career-focused block */}
                <div className="mt-10 p-6 rounded-2xl bg-[#12081f]/70 border border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">
                        Career Focus & Opportunities
                    </h3>

                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>
                            Actively seeking entry-level roles in Software Development or AI
                            Engineering
                        </li>
                        <li>
                            Interested in working on AI-driven products, LLMs, chatbots, and
                            intelligent web systems
                        </li>
                        <li>
                            Open to internships, full-time roles, and learning-focused
                            environments
                        </li>
                        <li>
                            Motivated to grow under mentorship while contributing meaningful
                            work to real projects
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
