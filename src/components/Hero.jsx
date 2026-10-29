import { FaCheckCircle } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import DashboardCard from "./DashboardCard";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#020617] text-white">
      
      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          px-6
          pt-24
          pb-8
        "
      >

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ================= LEFT ================= */}

          <div>

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-1.5
                text-sm
                font-medium
                text-cyan-300
              "
            >
              🚀 AI Powered Career Assistant
            </div>


            {/* Heading */}
            <h1
              className="
                mt-6
                text-5xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                md:text-6xl
              "
            >
              Build ATS-Friendly
              <br />

              <span className="text-cyan-400">
                Resumes That
              </span>

              <br />

              Get Hired.
            </h1>


            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-300
                md:text-lg
              "
            >
              ResumeIQ helps students and professionals build ATS-friendly
              resumes using AI. Analyze your resume, discover missing skills,
              improve resume quality and prepare confidently for interviews.
            </p>


            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">

              <button
                className="
                  rounded-xl
                  bg-cyan-400
                  px-7
                  py-3.5
                  font-semibold
                  text-slate-900
                  transition
                  hover:bg-cyan-300
                "
              >
                Upload Resume
              </button>


              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  px-7
                  py-3.5
                  transition
                  hover:bg-white/10
                "
              >
                Try Demo
                <HiArrowRight />
              </button>

            </div>


            {/* Features */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-6
                text-sm
                text-slate-300
              "
            >

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                AI Powered
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                ATS Optimized
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                Instant Analysis
              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-[540px]">
              <DashboardCard />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;