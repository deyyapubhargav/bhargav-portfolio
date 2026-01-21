import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="relative min-h-screen text-slate-100 overflow-hidden">
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b0218] via-[#140426] to-black -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_40%)] -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_45%)] -z-10" />

            {/* Content */}
            <Navbar />

            <main className="relative max-w-6xl mx-auto px-6">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
