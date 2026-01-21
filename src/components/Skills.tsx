export default function Skills() {
    return (
        <section id="skills" className="py-32">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                        AI & Data
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>Large Language Models (LLMs)</li>
                        <li>Generative AI</li>
                        <li>Natural Language Processing</li>
                        <li>Machine Learning</li>
                        <li>Small Language Models (SLMs)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                        Web Development
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Frontend Architecture</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-purple-400 font-semibold mb-4">
                        Tools & Version Control
                    </h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>Git & GitHub</li>
                        <li>Linux Basics</li>
                        <li>DevOps Fundamentals</li>
                        <li>Cloud Deployment (AWS – Basic)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
