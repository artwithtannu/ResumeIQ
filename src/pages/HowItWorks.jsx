import {
  FaFileUpload,
  FaCogs,
  FaRobot,
  FaBullseye,
  FaChartBar,
  FaCheckCircle,
  FaExclamationCircle,
  FaLightbulb,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaFileUpload />,
      title: "Upload Your Resume",
      description:
        "Upload your resume in PDF format and let ResumeIQ prepare it for analysis.",
    },
    {
      number: "02",
      icon: <FaCogs />,
      title: "Resume Processing",
      description:
        "The system extracts and processes the text from your uploaded resume.",
    },
    {
      number: "03",
      icon: <FaRobot />,
      title: "AI Resume Analysis",
      description:
        "Gemini analyzes your resume and evaluates its ATS score, strengths, issues and sections.",
    },
    {
      number: "04",
      icon: <FaBullseye />,
      title: "Job Description Matching",
      description:
        "Paste or upload a job description to compare your resume with the job requirements.",
    },
    {
      number: "05",
      icon: <FaChartBar />,
      title: "Get Your Results",
      description:
        "View your ATS score, skills, section scores, job match and AI-generated suggestions.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="px-8 pb-16 pt-32">
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
            ✨ Simple. Smart. AI-Powered.
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
            How{" "}
            <span className="text-cyan-400">ResumeIQ</span>{" "}
            Works
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
            From uploading your resume to getting AI-powered
            insights, understand the complete analysis process.
          </p>

        </div>
      </section>

      {/* ================= STEPS ================= */}

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-6xl">

          <div className="space-y-6">

            {steps.map((step, index) => (

              <div
                key={step.number}
                className="relative"
              >

                {/* Connecting Line */}

                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-8
                      top-24
                      hidden
                      h-10
                      w-px
                      bg-gradient-to-b
                      from-cyan-400/40
                      to-transparent
                      md:block
                    "
                  />
                )}

                <div
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900/50
                    p-6
                    backdrop-blur-sm
                    transition
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-slate-900/70
                  "
                >

                  <div className="flex flex-col gap-6 md:flex-row md:items-center">

                    {/* Step Number */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        text-xl
                        font-bold
                        text-cyan-400
                        transition
                        duration-300
                        group-hover:bg-cyan-400
                        group-hover:text-slate-950
                      "
                    >
                      {step.number}
                    </div>

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/[0.04]
                        text-xl
                        text-cyan-400
                      "
                    >
                      {step.icon}
                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <h2 className="text-xl font-bold text-white">
                        {step.title}
                      </h2>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  {/* JD Matching Details */}

                  {step.number === "04" && (

                    <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">

                      <div className="rounded-xl bg-white/[0.03] p-3">

                        <p className="text-xs text-slate-500">
                          Match Percentage
                        </p>

                        <p className="mt-1 text-sm font-semibold text-cyan-400">
                          Compare Resume & JD
                        </p>

                      </div>

                      <div className="rounded-xl bg-white/[0.03] p-3">

                        <p className="text-xs text-slate-500">
                          Matched Skills
                        </p>

                        <p className="mt-1 text-sm font-semibold text-green-400">
                          Identify Strengths
                        </p>

                      </div>

                      <div className="rounded-xl bg-white/[0.03] p-3">

                        <p className="text-xs text-slate-500">
                          Missing Skills
                        </p>

                        <p className="mt-1 text-sm font-semibold text-yellow-300">
                          Find Skill Gaps
                        </p>

                      </div>

                    </div>

                  )}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= VISUAL WORKFLOW ================= */}

      <section className="px-8 pb-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold text-cyan-400">
              THE COMPLETE FLOW
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From Resume to Results
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              ResumeIQ takes your resume through a simple
              analysis pipeline and turns it into useful insights.
            </p>

          </div>

          {/* ================= HORIZONTAL FLOW ================= */}

          <div
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-slate-900/60
              p-6
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              sm:p-8
            "
          >

            {/* Desktop */}

            <div className="hidden md:flex md:items-center">

              {[
                "Resume PDF",
                "Text Extraction",
                "AI Analysis",
                "JD Matching",
                "Results",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex flex-1 items-center"
                >

                  {/* Step */}

                  <div className="flex min-w-0 flex-1 flex-col items-center">

                    <div
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        text-lg
                        font-bold
                        text-cyan-400
                        transition
                        duration-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/20
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p
                      className="
                        mt-4
                        text-center
                        text-sm
                        font-semibold
                        text-slate-300
                      "
                    >
                      {item}
                    </p>

                  </div>

                  {/* Horizontal Connector */}

                  {index !== 4 && (
                    <div
                      className="
                        mx-2
                        h-px
                        flex-1
                        bg-gradient-to-r
                        from-cyan-400/40
                        to-cyan-400/10
                      "
                    />
                  )}

                </div>

              ))}

            </div>

            {/* Mobile */}

            <div className="flex flex-col items-center md:hidden">

              {[
                "Resume PDF",
                "Text Extraction",
                "AI Analysis",
                "JD Matching",
                "Results",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex flex-col items-center"
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      text-base
                      font-bold
                      text-cyan-400
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-3 text-sm font-semibold text-slate-300">
                    {item}
                  </p>

                  {index !== 4 && (
                    <div
                      className="
                        my-4
                        h-8
                        w-px
                        bg-gradient-to-b
                        from-cyan-400/40
                        to-cyan-400/10
                      "
                    />
                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= RESULT PREVIEW ================= */}

      <section className="px-8 pb-24">

        <div className="mx-auto max-w-5xl">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold text-cyan-400">
              YOUR RESULTS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything in One Place
            </h2>

          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/60
              p-6
              shadow-xl
              backdrop-blur-xl
              sm:p-8
            "
          >

            {/* Score Header */}

            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-white/10
                pb-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>

                <p className="text-sm text-slate-500">
                  Overall ATS Score
                </p>

                <h3 className="mt-1 text-4xl font-black text-cyan-400">
                  91<span className="text-xl">/100</span>
                </h3>

              </div>

              <div
                className="
                  rounded-xl
                  bg-green-400/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-green-400
                "
              >
                Strong Resume
              </div>

            </div>

            {/* Section Scores */}

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              {[
                ["Summary", "90%"],
                ["Skills", "94%"],
                ["Projects", "86%"],
                ["Experience", "88%"],
                ["Education", "96%"],
                ["Certifications", "80%"],
              ].map(([name, score]) => (

                <div key={name}>

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="text-slate-400">
                      {name}
                    </span>

                    <span className="text-cyan-400">
                      {score}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-800">

                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: score }}
                    />

                  </div>

                </div>

              ))}

            </div>

            {/* JD Match */}

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-400/5
                p-5
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs text-slate-500">
                    Job Description Match
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Frontend Developer
                  </p>

                </div>

                <span className="text-2xl font-bold text-cyan-400">
                  87%
                </span>

              </div>

              <div className="mt-4 h-2 rounded-full bg-slate-800">

                <div className="h-full w-[87%] rounded-full bg-cyan-400" />

              </div>

            </div>

            {/* Suggestions */}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <div
                className="
                  rounded-xl
                  border
                  border-green-400/10
                  bg-green-400/5
                  p-4
                "
              >

                <FaCheckCircle className="text-green-400" />

                <p className="mt-3 text-sm font-semibold text-white">
                  Matched Skills
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  React, JavaScript, Git and Node.js
                </p>

              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-yellow-400/10
                  bg-yellow-400/5
                  p-4
                "
              >

                <FaExclamationCircle className="text-yellow-300" />

                <p className="mt-3 text-sm font-semibold text-white">
                  Missing Skills
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Docker and AWS
                </p>

              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/5
                  p-4
                "
              >

                <FaLightbulb className="text-cyan-400" />

                <p className="mt-3 text-sm font-semibold text-white">
                  AI Suggestions
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Improve keywords and strengthen project descriptions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default HowItWorks;