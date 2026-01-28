import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-32">
            <h2
                className="text-4xl font-bold mb-16 text-center
                   bg-gradient-to-r from-violet-400 to-purple-400
                   bg-clip-text text-transparent"
            >
                Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: "easeOut",
                        }}
                        className="bg-[#12081f]/80 backdrop-blur
                       border border-purple-800 rounded-2xl p-8
                       hover:border-violet-400 transition"
                    >
                        <p className="text-sm text-purple-400 mb-2">
                            {project.type}
                        </p>

                        <h3 className="text-xl font-semibold mb-4">
                            {project.title}
                        </h3>

                        <p className="text-slate-300 leading-relaxed mb-4">
                            {project.description}
                        </p>

                        <p className="text-sm text-slate-400 mb-6">
                            Role: Design, development, and deployment
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full
                             border border-purple-700 text-violet-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline hover:text-violet-400"
                            >
                                View on GitHub
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
