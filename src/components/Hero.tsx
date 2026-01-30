import AvatarMotion from "./AvatarMotion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text */}
                <div>
                    <p className="text-violet-400 mb-3">
                        Hello, I’m
                    </p>

                    <h1 className="text-6xl font-extrabold mb-6">
                        DEYYAPU <span className="text-violet-400">BHARGAV</span>
                    </h1>

                    <p className="text-slate-400 max-w-md mb-6">
                        A web developer and AI enthusiast building modern,
                        responsive websites and intelligent applications
                        for students and small businesses.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="bg-violet-500 hover:bg-violet-400
                         text-black px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="border border-violet-400 text-violet-400
                         px-6 py-3 rounded-lg hover:bg-violet-500
                         hover:text-black transition"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                {/* Avatar */}
                <AvatarMotion />
            </div>
        </section>
    );
}
