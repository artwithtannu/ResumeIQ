import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password reset functionality will be added with the backend.
    console.log("Password reset requested");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= MAIN ================= */}

      <main className="px-8 pb-24 pt-32">

        <div className="mx-auto max-w-md">

          {/* ================= HERO ================= */}

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
              Account Recovery
            </div>

            <h1 className="mt-7 text-4xl font-extrabold">
              Forgot Your{" "}
              <span className="text-cyan-400">Password?</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Enter your registered email address and we’ll help you
              reset your password.
            </p>

          </div>

          {/* ================= FORM ================= */}

          <div
            className="
              mt-10
              rounded-3xl
              border
              border-white/10
              bg-slate-900/60
              p-6
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              sm:p-8
            "
          >

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
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

              {/* Button */}

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
                Send Reset Link
              </button>

            </form>

            {/* Back to Login */}

            <div className="mt-6 text-center">

              <Link
                to="/login"
                className="
                  text-sm
                  text-slate-400
                  transition
                  hover:text-cyan-400
                "
              >
                ← Back to Login
              </Link>

            </div>

          </div>

        </div>

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default ForgotPassword;