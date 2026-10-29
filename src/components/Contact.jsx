import {
  FaEnvelope,
  FaPaperPlane,
  FaComments,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
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
          right-[-100px]
          top-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          left-[-100px]
          bottom-10
          h-[250px]
          w-[250px]
          rounded-full
          bg-sky-500/10
          blur-[120px]
        "
      />


      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto w-full max-w-6xl">


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
            <FaEnvelope className="mr-2" />
            Contact Us
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
            Let's Build Your
            <span className="text-cyan-400">
              {" "}Better Career.
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
            Have a question, suggestion, or feedback?
            We'd love to hear from you.
          </p>

        </div>


        {/* ================= CONTACT CONTENT ================= */}

        <div
          className="
            mt-10
            grid
            gap-7
            lg:grid-cols-[1.3fr_0.7fr]
          "
        >


          {/* ================= FORM ================= */}

          <div
            className="
              rounded-[24px]
              border
              border-white/10
              bg-[#0b1220]/80
              p-6
              shadow-[0_20px_70px_rgba(0,0,0,.35)]
              backdrop-blur-xl
              md:p-7
            "
          >

            <h3 className="text-xl font-bold text-white">
              Send us a message
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              We'll get back to you as soon as possible.
            </p>


            <form className="mt-6 space-y-4">


              {/* NAME */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#111827]
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    transition
                    focus:border-cyan-400
                    focus:ring-1
                    focus:ring-cyan-400/30
                  "
                />

              </div>


              {/* EMAIL */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#111827]
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    transition
                    focus:border-cyan-400
                    focus:ring-1
                    focus:ring-cyan-400/30
                  "
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us how we can help..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-700
                    bg-[#111827]
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    transition
                    focus:border-cyan-400
                    focus:ring-1
                    focus:ring-cyan-400/30
                  "
                />

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  py-3
                  text-sm
                  font-bold
                  text-slate-900
                  shadow-lg
                  shadow-cyan-500/20
                  transition
                  duration-200
                  hover:bg-cyan-300
                  hover:shadow-cyan-500/30
                "
              >
                Send Message
                <FaPaperPlane className="text-xs" />
              </button>

            </form>

          </div>


          {/* ================= RIGHT INFO ================= */}

          <div className="flex flex-col gap-5">


            {/* EMAIL CARD */}

            <div
              className="
                rounded-[22px]
                border
                border-white/10
                bg-[#0b1220]/80
                p-6
                backdrop-blur-xl
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
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <FaEnvelope />
              </div>

              <h3 className="mt-4 font-semibold text-white">
                Email Us
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Have a question? Drop us an email.
              </p>

              <p className="mt-3 text-sm font-medium text-cyan-400">
                support@resumeiq.com
              </p>

            </div>


            {/* SUPPORT CARD */}

            <div
              className="
                rounded-[22px]
                border
                border-white/10
                bg-[#0b1220]/80
                p-6
                backdrop-blur-xl
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
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <FaComments />
              </div>

              <h3 className="mt-4 font-semibold text-white">
                Career Support
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Need help improving your resume or getting
                started with ResumeIQ?
              </p>

              <span className="mt-3 inline-block text-sm font-medium text-cyan-400">
                We're here to help.
              </span>

            </div>


            {/* LOCATION / REMOTE CARD */}

            <div
              className="
                rounded-[22px]
                border
                border-cyan-500/10
                bg-gradient-to-br
                from-cyan-500/10
                to-sky-500/5
                p-6
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Always Available
                  </h3>

                  <p className="text-sm text-slate-400">
                    Your career journey doesn't stop.
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

export default Contact;