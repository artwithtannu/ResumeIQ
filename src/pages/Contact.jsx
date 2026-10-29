import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend/email functionality will be added later.
    console.log("Contact Form Data:", formData);
  };

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
            Get In Touch
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
            Contact{" "}
            <span className="text-cyan-400">ResumeIQ</span>
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
            Have a question or feedback about ResumeIQ?
            Send us a message and we will get back to you.
          </p>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}

      <section className="px-8 pb-24">

        <div className="mx-auto max-w-3xl">

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/60
              p-6
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              sm:p-8
              lg:p-10
            "
          >

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* ================= NAME ================= */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

              </div>

              {/* ================= EMAIL ================= */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

              </div>

              {/* ================= SUBJECT ================= */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

              </div>

              {/* ================= MESSAGE ================= */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="6"
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/50
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

              </div>

              {/* ================= BUTTON ================= */}

              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-cyan-400
                  px-6
                  py-3
                  font-semibold
                  text-slate-900
                  shadow-lg
                  shadow-cyan-500/20
                  transition
                  hover:bg-cyan-300
                  active:scale-[0.99]
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default Contact;