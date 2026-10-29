import {
  FaFileAlt,
  FaChartLine,
  FaBullseye,
  FaCheckCircle,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="px-8 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            About ResumeIQ
          </div>

          <h1
            className="
              mt-7
              text-4xl
              font-extrabold
              leading-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Make Your Resume
            <span className="text-cyan-400"> Work Smarter</span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            ResumeIQ is an AI-powered resume analysis platform designed
            to help users understand how their resume performs and how
            well it matches a specific job description.
          </p>

        </div>
      </section>

      {/* ================= WHAT RESUMEIQ DOES ================= */}

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold text-cyan-400">
              WHAT RESUMEIQ DOES
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Understand Your Resume Better
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              ResumeIQ evaluates your resume from different perspectives
              to give you a clearer understanding of its effectiveness.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Resume Analysis */}

            <div
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-slate-900/50
                p-7
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-slate-900/70
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-xl
                  text-cyan-400
                  transition
                  group-hover:bg-cyan-400
                  group-hover:text-slate-950
                "
              >
                <FaFileAlt />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Resume Analysis
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Analyze your resume content and understand its strengths,
                formatting issues, missing sections and areas that need
                improvement.
              </p>

            </div>

            {/* ATS Scoring */}

            <div
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-slate-900/50
                p-7
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-slate-900/70
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-xl
                  text-cyan-400
                  transition
                  group-hover:bg-cyan-400
                  group-hover:text-slate-950
                "
              >
                <FaChartLine />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                ATS Scoring
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Get an overall ATS score and section-wise evaluation
                to understand how effectively your resume is structured
                for automated screening.
              </p>

            </div>

            {/* Job Description Matching */}

            <div
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-slate-900/50
                p-7
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-slate-900/70
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-xl
                  text-cyan-400
                  transition
                  group-hover:bg-cyan-400
                  group-hover:text-slate-950
                "
              >
                <FaBullseye />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Job Description Matching
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Compare your resume with a specific job description
                to identify matched skills, missing skills and relevant
                areas for improvement.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= HOW IT HELPS ================= */}

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold text-cyan-400">
              HOW IT HELPS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Turn Analysis Into Improvement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Instead of simply showing a score, ResumeIQ helps you
              understand what you can improve in your resume.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Strengths */}

            <div
              className="
                rounded-2xl
                border
                border-green-400/10
                bg-green-400/[0.03]
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:border-green-400/30
              "
            >

              <FaCheckCircle className="text-2xl text-green-400" />

              <h3 className="mt-5 text-xl font-bold">
                Identify Resume Strengths
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Understand which parts of your resume are already
                strong and contributing positively to your overall
                resume performance.
              </p>

            </div>

            {/* Missing Skills */}

            <div
              className="
                rounded-2xl
                border
                border-yellow-400/10
                bg-yellow-400/[0.03]
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:border-yellow-400/30
              "
            >

              <FaSearch className="text-2xl text-yellow-300" />

              <h3 className="mt-5 text-xl font-bold">
                Find Missing Skills
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                When a job description is provided, identify important
                skills that appear in the requirements but are missing
                from your resume.
              </p>

            </div>

            {/* Improve Resume */}

            <div
              className="
                rounded-2xl
                border
                border-cyan-400/10
                bg-cyan-400/[0.03]
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
              "
            >

              <FaLightbulb className="text-2xl text-cyan-400" />

              <h3 className="mt-5 text-xl font-bold">
                Improve Your Resume
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Use AI-generated suggestions to improve your resume
                content, strengthen descriptions and make it more
                relevant to the target role.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default About;