import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto w-full max-w-7xl px-8 py-12">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-1">

            <h2 className="text-3xl font-black text-white">
              Resume<span className="text-cyan-400">IQ</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Your AI-powered career assistant to build
              better resumes, improve ATS scores and prepare
              confidently for your career.
            </p>

          </div>


          {/* ================= PRODUCT ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/features"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Features
              </Link>

              <Link
                to="/how-it-works"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                How It Works
              </Link>

              <Link
                to="/resume-analyzer"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Resume Analyzer
              </Link>

            </div>

          </div>


          {/* ================= COMPANY ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/about"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* ================= LEGAL ================= */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/privacy-policy"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="w-fit text-sm text-slate-400 transition hover:text-cyan-400"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="mt-10 border-t border-white/10" />


        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-6
            flex
            flex-col
            items-center
            justify-between
            gap-3
            text-center
            sm:flex-row
            sm:text-left
          "
        >

          <p className="text-sm text-slate-500">
            © 2026 ResumeIQ. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with{" "}
            <span className="text-cyan-400">AI</span>{" "}
            for job seekers.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;