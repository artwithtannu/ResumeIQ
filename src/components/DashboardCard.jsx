import {
  FaFileAlt,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

const DashboardCard = () => {
  return (
    <div
      className="
        w-full
        rounded-[24px]
        border
        border-cyan-500/20
        bg-[#0b1220]/95
        p-6
        shadow-[0_20px_70px_rgba(0,0,0,.35)]
        backdrop-blur-xl
      "
    >

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            Resume Dashboard
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            AI Resume Analysis
          </p>
        </div>


        <div className="rounded-xl bg-cyan-400 p-2.5">
          <FaFileAlt className="text-lg text-slate-900" />
        </div>

      </div>


      {/* ================= ATS SCORE ================= */}

      <div className="mt-5">

        <div className="mb-1.5 flex justify-between">

          <span className="text-sm text-slate-300">
            ATS Score
          </span>

          <span className="text-sm font-bold text-cyan-400">
            91%
          </span>

        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-slate-700">

          <div
            className="
              h-full
              w-[91%]
              rounded-full
              bg-cyan-400
            "
          />

        </div>

      </div>


      {/* ================= STATS ================= */}

      <div className="mt-5 space-y-3">

        <div className="flex justify-between">
          <span className="text-sm text-slate-300">
            Resume Health
          </span>

          <span className="text-sm font-semibold text-green-400">
            Excellent
          </span>
        </div>


        <div className="flex justify-between">
          <span className="text-sm text-slate-300">
            Interview Ready
          </span>

          <span className="text-sm font-semibold text-yellow-300">
            82 / 100
          </span>
        </div>


        <div className="flex justify-between">
          <span className="text-sm text-slate-300">
            Keyword Match
          </span>

          <span className="text-sm font-semibold text-cyan-400">
            87%
          </span>
        </div>

      </div>


      {/* ================= SKILLS ================= */}

      <div className="mt-5">

        <p className="mb-2 text-sm text-slate-300">
          Suggested Skills
        </p>

        <div className="flex flex-wrap gap-2">

          {["React", "Node.js", "Docker", "AWS"].map((skill) => (
            <span
              key={skill}
              className="
                rounded-lg
                bg-cyan-500/15
                px-2.5
                py-1
                text-xs
                font-medium
                text-cyan-300
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>


      {/* ================= AI INSIGHT ================= */}

      <div
        className="
          mt-5
          rounded-xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          p-3.5
        "
      >

        <div className="flex items-center gap-2">

          <FaChartLine className="text-cyan-400" />

          <h3 className="text-sm font-semibold text-white">
            AI Insight
          </h3>

        </div>


        <p className="mt-1.5 text-xs leading-5 text-slate-300">
          Adding cloud skills and stronger action verbs could
          improve your ATS score by approximately 7%.
        </p>

      </div>


      {/* ================= BUTTON ================= */}

      <button
        className="
          mt-5
          w-full
          rounded-xl
          bg-cyan-400
          py-3
          text-[15px]
          font-bold
          text-slate-900
          shadow-lg
          shadow-cyan-500/20
          transition
          hover:bg-cyan-300
        "
      >
        Generate AI Report
      </button>


      {/* ================= FOOTER ================= */}

      <div className="mt-3 flex items-center gap-2 text-green-400">

        <FaCheckCircle className="text-sm" />

        <span className="text-xs">
          AI Analysis Completed
        </span>

      </div>

    </div>
  );
};

export default DashboardCard;