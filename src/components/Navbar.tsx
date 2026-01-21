export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-purple-900">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <span className="font-bold text-lg bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    Bhargav
                </span>

                {/* Navigation */}
                <div className="flex items-center gap-6 text-sm">
                    <a
                        href="#about"
                        className="hover:text-violet-400 transition"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="hover:text-violet-400 transition"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-violet-400 transition"
                    >
                        Projects
                    </a>

                    {/* Contact Button (Top Right) */}
                    <a
                        href="#contact"
                        className="px-4 py-1.5 rounded-lg border border-purple-500 text-purple-400
                       hover:bg-purple-500 hover:text-black transition"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
