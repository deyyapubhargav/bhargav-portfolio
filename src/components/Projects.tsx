import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-32 relative">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-[#12081f]/80 backdrop-blur border border-purple-800 rounded-2xl p-8 hover:border-violet-400 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition"
                    >
                        <p className="text-sm text-purple-400 mb-2">
                            {project.type}
                        </p>

                        <h3 className="text-xl font-semibold mb-4">
                            {project.title}
                        </h3>

                        <p className="text-slate-300 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full border border-purple-700 text-violet-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 text-sm">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-violet-400"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
