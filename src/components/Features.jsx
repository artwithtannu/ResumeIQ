import {
  FaFileAlt,
  FaBullseye,
  FaRobot,
  FaChartLine,
  FaBriefcase,
  FaMagic,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaFileAlt />,
      title: "ATS Resume Analysis",
      description:
        "Analyze your resume and understand how well it performs against modern ATS systems.",
    },
    {
      icon: <FaBullseye />,
      title: "Missing Skills Detection",
      description:
        "Discover important skills and keywords that are missing from your resume.",
    },
    {
      icon: <FaRobot />,
      title: "AI-Powered Suggestions",
      description:
        "Get intelligent recommendations to improve your resume content and overall quality.",
    },
    {
      icon: <FaChartLine />,
      title: "Resume Health Score",
      description:
        "Get a clear score that shows the overall strength and effectiveness of your resume.",
    },
    {
      icon: <FaBriefcase />,
      title: "Interview Readiness",
      description:
        "Understand how prepared you are for your target roles and identify areas to improve.",
    },
    {
      icon: <FaMagic />,
      title: "AI Resume Improvement",
      description:
        "Improve wording, action verbs, keywords and descriptions with AI-powered suggestions.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#020617] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
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
            Powerful Features
          </span>

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
           Every Day Is a New Opportunity to
            <span className="text-cyan-400">
              {" "}Build a Better Resume
            </span>
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-slate-400
            "
          >
            ResumeIQ combines AI-powered analysis with practical
            career insights to help you create a stronger,
            ATS-friendly resume.
          </p>

        </div>


        {/* ================= FEATURE CARDS ================= */}

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {features.map((feature) => (

            <div
              key={feature.title}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-[#0b1220]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-[#0d1728]
              "
            >

              {/* ICON */}

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


              {/* TITLE */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-white
                "
              >
                {feature.title}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;