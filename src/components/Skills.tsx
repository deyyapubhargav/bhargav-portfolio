export default function Skills() {
    return (
        <section
            id="skills"
            onMouseEnter={() => window.setAvatarSection?.("projects")
            }
            className="py-32 max-w-5xl mx-auto"
        >
            <h2 className="text-4xl font-bold mb-12 text-center
                     bg-gradient-to-r from-violet-400 to-purple-400
                     bg-clip-text text-transparent">
                Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-10 text-slate-300">
                <div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                        Web Development
                    </h3>
                    <ul className="space-y-2">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React & Tailwind CSS</li>
                        <li>Responsive (Mobile-First) Design</li>
                        <li>Modern UI Development</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                        Tools & Workflow
                    </h3>
                    <ul className="space-y-2">
                        <li>Git & GitHub</li>
                        <li>Vercel & Netlify Deployment</li>
                        <li>Clean Code Practices</li>
                        <li>Debugging & Performance Fixes</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                        AI & Automation
                    </h3>
                    <ul className="space-y-2">
                        <li>AI Chatbots & Assistants</li>
                        <li>Large Language Models (LLMs)</li>
                        <li>Python Automation</li>
                        <li>API Integration</li>
                    </ul>
                </div>
            </div>

            <p className="mt-12 text-center text-slate-400">
                I focus on skills that help clients get fast, reliable,
                and professional results.
            </p>
        </section>
    );
}
