import {
  FaRobot,
  FaChartLine,
  FaSearch,
  FaLightbulb,
  FaFileAlt,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import resumeTemplate from "../assets/resume-template.jpeg";


const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Resume Analysis",
      description:
        "Get an AI-powered analysis of your resume and discover areas that can be improved.",

      visual: (
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15">
              <FaRobot className="text-cyan-400" />
            </div>

            <div className="flex-1">
              <div className="h-2 w-24 rounded-full bg-slate-700" />

              <div className="mt-2 h-2 w-32 rounded-full bg-slate-800" />
            </div>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-[88%] rounded-full bg-cyan-400" />
          </div>

        </div>
      ),
    },


    {
      icon: <FaChartLine />,
      title: "ATS Score",
      description:
        "Understand how well your resume is optimized for Applicant Tracking Systems.",

      visual: (
        <div className="mt-6 flex items-center gap-5 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-cyan-400/30">

            <span className="text-xl font-bold text-cyan-400">
              91%
            </span>

          </div>

          <div className="flex-1">

            <p className="text-sm font-semibold text-white">
              Excellent Score
            </p>

            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-full w-[91%] rounded-full bg-cyan-400" />
            </div>

          </div>

        </div>
      ),
    },


    {
      icon: <FaSearch />,
      title: "Missing Keywords",
      description:
        "Find important keywords missing from your resume based on your target role.",

      visual: (
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">

          <p className="mb-3 text-xs text-slate-400">
            Suggested Keywords
          </p>

          <div className="flex flex-wrap gap-2">

            {["AWS", "Docker", "REST API", "CI/CD"].map(
              (keyword) => (
                <span
                  key={keyword}
                  className="
                    rounded-lg
                    bg-cyan-400/10
                    px-3
                    py-1.5
                    text-xs
                    text-cyan-300
                  "
                >
                  {keyword}
                </span>
              )
            )}

          </div>

        </div>
      ),
    },


    {
      icon: <FaLightbulb />,
      title: "Skill Suggestions",
      description:
        "Discover relevant technical skills that can strengthen your resume and career profile.",

      visual: (
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">

          <div className="grid grid-cols-2 gap-2">

            {["React", "Node.js", "Docker", "AWS"].map(
              (skill) => (
                <div
                  key={skill}
                  className="
                    rounded-lg
                    border
                    border-white/5
                    bg-white/[0.03]
                    px-3
                    py-2
                    text-xs
                    text-slate-300
                  "
                >
                  + {skill}
                </div>
              )
            )}

          </div>

        </div>
      ),
    },


    {
      icon: <FaFileAlt />,
      title: "Resume Improvement",
      description:
        "Improve weak resume statements with stronger, clearer and more impactful wording.",

      visual: (
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">

          <p className="text-xs text-slate-500">
            Before
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Worked on a web application.
          </p>

          <div className="my-3 border-t border-white/10" />

          <p className="text-xs text-cyan-400">
            AI Improved
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-300">
            Developed and optimized a responsive web
            application using modern technologies.
          </p>

        </div>
      ),
    },


   {
  icon: <FaSearch />,
  title: "Job Description Matching",
  description:
    "Compare your resume with a job description to identify matched skills, missing skills and areas for improvement.",

  visual: (
    <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-4">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs text-slate-500">
            Frontend Developer
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            Job Description Match
          </p>
        </div>

        <span className="text-lg font-bold text-cyan-400">
          87%
        </span>

      </div>


      <div className="mt-3 h-2 rounded-full bg-slate-800">

        <div className="h-full w-[87%] rounded-full bg-cyan-400" />

      </div>


      <div className="mt-4 flex flex-wrap gap-2">

        {["React", "JavaScript", "Git"].map((skill) => (

          <span
            key={skill}
            className="
              rounded-lg
              bg-cyan-400/10
              px-3
              py-1.5
              text-xs
              text-cyan-300
            "
          >
            ✓ {skill}
          </span>

        ))}

      </div>


      <div className="mt-3 flex flex-wrap gap-2">

        {["Docker", "AWS"].map((skill) => (

          <span
            key={skill}
            className="
              rounded-lg
              bg-red-400/10
              px-3
              py-1.5
              text-xs
              text-red-300
            "
          >
            + {skill}
          </span>

        ))}

      </div>

    </div>
  ),
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
            ✨ Powerful Resume Tools
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
            Everything You Need to Build a{" "}

            <span className="text-cyan-400">
              Better Resume
            </span>
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
            ResumeIQ combines AI-powered analysis with practical
            career insights to help you create a stronger,
            ATS-friendly resume.
          </p>

        </div>

      </section>


      {/* ================= FEATURES GRID ================= */}

      <section className="px-8 pb-24">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-slate-900/50
                p-6
                shadow-xl
                shadow-black/10
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-slate-900/70
              "
            >

              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-xl
                  text-cyan-400
                  transition
                  duration-300
                  group-hover:bg-cyan-400
                  group-hover:text-slate-900
                "
              >
                {feature.icon}
              </div>


              {/* Title */}

              <h2 className="mt-5 text-xl font-bold text-white">
                {feature.title}
              </h2>


              {/* Description */}

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>


              {/* Feature Visual */}

              {feature.visual}

            </div>

          ))}

        </div>

      </section>


      {/* ================= ANALYSIS PREVIEW ================= */}

      <section className="px-8 pb-24">

        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold text-cyan-400">
              SEE IT IN ACTION
            </p>


            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              One Resume. Complete Analysis.
            </h2>


            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Get a clear picture of your resume's strengths
              and the areas that need improvement.
            </p>

          </div>


          {/* ================= ANALYSIS CONTAINER ================= */}

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

            <div className="grid gap-8 lg:grid-cols-2">


              {/* ================= YOUR RESUME ================= */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-950/70
                  p-6
                "
              >

                {/* Resume Header */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-400
                    "
                  >
                    <FaFileAlt className="text-xl text-slate-900" />
                  </div>


                  <div>

                    <h3 className="font-bold text-white">
                      Your Resume
                    </h3>

                    <p className="text-xs text-slate-500">
                      Resume.pdf
                    </p>

                  </div>

                </div>


                {/* Actual Resume Template */}

                <div
                  className="
                    mt-7
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-white
                    shadow-lg
                  "
                >

                  <img
                    src={resumeTemplate}
                    alt="Resume Template Preview"
                    className="
                      h-[420px]
                      w-full
                      object-contain
                      object-top
                    "
                  />

                </div>

              </div>


              {/* ================= AI ANALYSIS ================= */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-950/70
                  p-6
                "
              >

                {/* Header */}

                <div className="flex items-center justify-between">

                  <h3 className="font-bold text-white">
                    AI Analysis
                  </h3>

                  <span className="text-2xl font-black text-cyan-400">
                    91%
                  </span>

                </div>


                {/* ATS Progress */}

                <div className="mt-4 h-2 rounded-full bg-slate-800">

                  <div className="h-full w-[91%] rounded-full bg-cyan-400" />

                </div>


                {/* Analysis Stats */}

                <div className="mt-7 space-y-4">

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-400">
                      Resume Health
                    </span>

                    <span className="text-sm font-semibold text-green-400">
                      Excellent
                    </span>

                  </div>


                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-400">
                      Keyword Match
                    </span>

                    <span className="text-sm font-semibold text-cyan-400">
                      87%
                    </span>

                  </div>


                  <div className="flex items-center justify-between">

                    <span className="text-sm text-slate-400">
                      Interview Ready
                    </span>

                    <span className="text-sm font-semibold text-yellow-300">
                      82 / 100
                    </span>

                  </div>

                </div>


                {/* AI Recommendation */}

                <div
                  className="
                    mt-7
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-400/10
                    p-4
                  "
                >

                  <div className="flex items-center gap-2">

                    <FaLightbulb className="text-cyan-400" />

                    <span className="text-sm font-semibold text-white">
                      AI Recommendation
                    </span>

                  </div>


                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Add stronger action verbs and cloud-related
                    skills to improve your resume.
                  </p>

                </div>


                {/* Suggested Keywords */}

                <div className="mt-7">

                  <p className="mb-3 text-xs text-slate-500">
                    Suggested Skills
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {["React", "Node.js", "Docker", "AWS"].map(
                      (skill) => (

                        <span
                          key={skill}
                          className="
                            rounded-lg
                            bg-cyan-400/10
                            px-3
                            py-1.5
                            text-xs
                            text-cyan-300
                          "
                        >
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </div>

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


export default Features;