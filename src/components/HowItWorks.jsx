import {
  FaFileUpload,
  FaRobot,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FaFileUpload,
      title: "Upload Resume",
      description:
        "Upload your existing PDF or DOCX resume and let ResumeIQ get started.",
    },
    {
      number: "02",
      icon: FaRobot,
      title: "AI Analysis",
      description:
        "Our AI analyzes your skills, keywords, content, and resume formatting.",
    },
    {
      number: "03",
      icon: FaChartBar,
      title: "Get Insights",
      description:
        "Get your ATS score, missing keywords, resume health, and improvement areas.",
    },
    {
      number: "04",
      icon: FaRocket,
      title: "Improve & Get Hired",
      description:
        "Apply AI recommendations and make your resume stronger and job-ready.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#020617] px-6 pt-10 pb-16"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            How It Works
          </span>

          <h2
            className="
              mt-3
              text-4xl
              font-extrabold
              leading-tight
              text-white
              md:text-5xl
            "
          >
            From Resume to{" "}
            <span className="text-cyan-400">
              Results
            </span>{" "}
            in 4 Steps
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              md:text-lg
            "
          >
            ResumeIQ makes resume improvement simple. Upload your
            resume, let AI analyze it, understand your weaknesses,
            and improve it with intelligent recommendations.
          </p>

        </div>


        {/* ================= STEPS ================= */}

        <div className="relative mt-12">

          {/* CONNECTING LINE */}

          <div
            className="
              absolute
              left-[12%]
              right-[12%]
              top-[42px]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-500/40
              to-transparent
              lg:block
            "
          />


          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    text-center
                  "
                >

                  {/* ================= ICON ================= */}

                  <div className="relative mx-auto w-fit">

                    {/* Number */}

                    <div
                      className="
                        absolute
                        -right-3
                        -top-3
                        z-20
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-[#020617]
                        text-[10px]
                        font-bold
                        text-cyan-400
                      "
                    >
                      {step.number}
                    </div>


                    {/* Icon Box */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-[84px]
                        w-[84px]
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-500/20
                        bg-[#0b1220]
                        shadow-[0_0_35px_rgba(34,211,238,0.08)]
                        transition
                        duration-300
                        group-hover:-translate-y-2
                        group-hover:border-cyan-400/50
                        group-hover:bg-cyan-400
                        group-hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
                      "
                    >
                      <Icon
                        className="
                          text-2xl
                          text-cyan-400
                          transition
                          duration-300
                          group-hover:text-slate-900
                        "
                      />
                    </div>

                  </div>


                  {/* ================= CONTENT ================= */}

                  <h3
                    className="
                      mt-7
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-[260px]
                      text-sm
                      leading-6
                      text-slate-400
                    "
                  >
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>


        {/* ================= BOTTOM VISUAL ================= */}

        <div
          className="
            mx-auto
            mt-12
            max-w-4xl
            rounded-[28px]
            border
            border-cyan-500/20
            bg-[#0b1220]/80
            p-6
            shadow-[0_20px_80px_rgba(0,0,0,.35)]
            backdrop-blur-xl
            md:p-8
          "
        >

          <div className="grid items-center gap-8 md:grid-cols-2">

            {/* LEFT */}

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-cyan-400
                "
              >
                AI Resume Analysis
              </p>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-bold
                  text-white
                  md:text-3xl
                "
              >
                Understand your resume
                before recruiters do.
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                Get a clear picture of your resume performance
                with AI-powered scores, insights, and actionable
                recommendations.
              </p>

            </div>


            {/* RIGHT — DASHBOARD PREVIEW */}

            <div
              className="
                rounded-2xl
                border
                border-slate-700/70
                bg-[#111827]
                p-5
                transition
                duration-300
                hover:border-cyan-500/30
              "
            >

              {/* Score Header */}

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-300">
                  ATS Score
                </span>

                <span className="text-xl font-bold text-cyan-400">
                  91%
                </span>

              </div>


              {/* Progress */}

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">

                <div
                  className="
                    h-full
                    w-[91%]
                    rounded-full
                    bg-cyan-400
                  "
                />

              </div>


              {/* Metrics */}

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">

                  <span className="text-sm text-slate-400">
                    Resume Health
                  </span>

                  <span className="text-sm font-semibold text-green-400">
                    Excellent
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-sm text-slate-400">
                    Keyword Match
                  </span>

                  <span className="text-sm font-semibold text-cyan-400">
                    87%
                  </span>

                </div>


                <div className="flex justify-between">

                  <span className="text-sm text-slate-400">
                    Interview Ready
                  </span>

                  <span className="text-sm font-semibold text-yellow-300">
                    82 / 100
                  </span>

                </div>

              </div>


              {/* AI Status */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-4
                  py-3
                "
              >

                <FaRobot className="text-cyan-400" />

                <span className="text-xs text-slate-300">
                  AI analysis completed successfully
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;