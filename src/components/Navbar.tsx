export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0B1120]/95 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="/" className="text-xl md:text-2xl font-bold">
          Alphonse Damas
        </a>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="/writing" className="hover:text-blue-400 transition">Writing</a>
          <a href="/resume" className="hover:text-blue-400 transition">Resume</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        <a
          href="/contact"
          className="md:hidden text-sm border border-gray-700 px-3 py-2 rounded-lg hover:border-blue-400 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}