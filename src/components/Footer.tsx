export default function Footer() {
  return (
    <footer className="bg-[#08101F] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-10 py-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">
              Alphonse Damas
            </h3>

            <p className="max-w-md leading-relaxed">
              Enterprise analytics, AI governance, decision systems,
              experimentation, observability, and trustworthy AI infrastructure.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-8 text-sm">

            <a
              href="https://www.linkedin.com/in/alphonse-damas-phd-609222212/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="/resume/Alphonse_Damas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alphonse.damas@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Email
            </a>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row md:justify-between gap-4">
          <p>
            © 2026 Alphonse Damas. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}