export default function Footer() {
    return (
        <footer className="border-t border-slate-800 py-8 mt-24">
            <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
                <p>
                    © {new Date().getFullYear()} Deyyapu Bhargav. All rights reserved.
                </p>

                <div className="mt-4 flex justify-center gap-6">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        Resume
                    </a>

                    <a
                        href="https://www.linkedin.com/in/deyyapu-bhargav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/deyyapubhargav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
