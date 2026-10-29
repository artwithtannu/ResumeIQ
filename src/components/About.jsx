import {
  FaBullseye,
  FaRobot,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#020617]
        px-6
        pt-14
        pb-16
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          left-1/2
          top-20
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />


      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto w-full max-w-7xl">


        {/* ================= HEADING ================= */}

        <div className="text-center">

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
            ✨ About ResumeIQ
          </div>


          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Smarter Resumes.
            <span className="text-cyan-400">
              {" "}Better Careers.
            </span>
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
            ResumeIQ is an AI-powered career assistant designed
            to help students and professionals create stronger,
            ATS-friendly resumes and improve their career readiness.
          </p>

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-12
            grid
            items-center
            gap-10
            lg:grid-cols-2
          "
        >


          {/* ================= LEFT VISUAL ================= */}

          <div className="flex justify-center">

            <div
              className="
                relative
                flex
                h-[320px]
                w-full
                max-w-[480px]
                items-center
                justify-center
                overflow-hidden
                rounded-[28px]
                border
                border-cyan-500/20
                bg-[#0b1220]/80
                shadow-[0_20px_70px_rgba(0,0,0,.4)]
                backdrop-blur-xl
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-cyan-400/15
                  blur-[80px]
                "
              />


              {/* Illustration */}

              <img
                src="/images/about-ai.png"
                alt="ResumeIQ AI Assistant"
                className="
                  relative
                  z-10
                  w-[270px]
                  object-contain
                  transition
                  duration-500
                  hover:scale-105
                "
              />


              {/* Floating Badge */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  z-20
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-[#0b1220]/90
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-cyan-300
                  shadow-lg
                  backdrop-blur-xl
                "
              >
                🤖 AI Career Assistant
              </div>

            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                text-white
                md:text-3xl
              "
            >
              Why We Built ResumeIQ
            </h3>


            <p
              className="
                mt-4
                text-base
                leading-7
                text-slate-400
              "
            >
              Building a resume shouldn't feel complicated.
              ResumeIQ brings AI-powered analysis and career
              insights together in one simple platform, helping
              you understand what can make your resume stronger.
            </p>


            {/* ================= THREE POINTS ================= */}

            <div className="mt-7 space-y-4">


              {/* Smart Analysis */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-[#0b1220]/70
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/20
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <FaBullseye />
                </div>


                <div>

                  <h4 className="font-semibold text-white">
                    Smart Analysis
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Understand your resume strengths and gaps.
                  </p>

                </div>

              </div>


              {/* AI Powered */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-[#0b1220]/70
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/20
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <FaRobot />
                </div>


                <div>

                  <h4 className="font-semibold text-white">
                    AI Powered
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Get intelligent insights to improve your resume.
                  </p>

                </div>

              </div>


              {/* Career Focused */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-[#0b1220]/70
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-500/20
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <FaRocket />
                </div>


                <div>

                  <h4 className="font-semibold text-white">
                    Career Focused
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Build confidence and prepare for your next opportunity.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;