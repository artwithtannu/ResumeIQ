import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://resumeiq-backend-livid.vercel.app";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      // Backend returned an error
      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Store JWT
      if (rememberMe) {
        localStorage.setItem("token", data.token);
        sessionStorage.removeItem("token");
      } else {
        sessionStorage.setItem("token", data.token);
        localStorage.removeItem("token");
      }

      // Store user information
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen overflow-hidden bg-[#020617]">

      <div
        className="
          mx-auto flex min-h-screen w-full max-w-[1550px]
          items-center gap-14
          px-8 py-5
        "
      >

        {/* ================= LEFT IMAGE ================= */}

        <div className="hidden lg:flex flex-1 items-center justify-center">

          <div className="relative flex w-full items-center justify-center">

            {/* Glow */}

            <div
              className="
                absolute
                h-[560px] w-[560px]
                rounded-full
                bg-cyan-500/10
                blur-[150px]
              "
            />

            {/* Image */}

            <img
              src="/images/login-ai.png"
              alt="AI Resume"
              className="
                relative z-10
                w-full
                max-w-[630px]
                object-contain
              "
            />

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            flex flex-1
            justify-center
            lg:justify-end
          "
        >

          {/* ================= LOGIN CARD ================= */}

          <div
            className="
              w-full
              max-w-[640px]
              rounded-[30px]
              border border-cyan-500/20
              bg-[#0b1220]/95
              px-11 py-7
              shadow-[0_20px_90px_rgba(0,0,0,.55)]
              backdrop-blur-3xl
            "
          >

            {/* ================= HEADING ================= */}

            <h1
              className="
                whitespace-nowrap
                text-[42px]
                font-black
                leading-none
                tracking-[-1.5px]
                text-white
              "
            >
              Welcome{" "}
              <span className="text-cyan-400">
                Back
              </span>

              <span className="ml-3">
                👋
              </span>
            </h1>


            {/* ================= SUB HEADING ================= */}

            <h2
              className="
                mt-5
                text-[21px]
                font-bold
                text-white
              "
            >
              Please sign in to continue.
            </h2>


            <p
              className="
                mt-1.5
                text-[17px]
                leading-7
                text-slate-400
              "
            >
              Access your account and continue your journey.
            </p>


            {/* ================= FORM ================= */}

            <form
              className="mt-5"
              onSubmit={handleSubmit}
            >

              {/* ================= EMAIL ================= */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-[16px]
                    font-semibold
                    text-white
                  "
                >
                  Email Address
                </label>


                <div
                  className="
                    flex
                    h-[60px]
                    w-full
                    items-center
                    overflow-hidden
                    rounded-[17px]
                    border
                    border-slate-700
                    bg-[#111827]
                    transition
                    focus-within:border-cyan-400
                  "
                >

                  {/* EMAIL ICON */}

                  <div
                    className="
                      flex
                      h-full
                      w-[68px]
                      shrink-0
                      items-center
                      justify-center
                      border-r
                      border-slate-700
                    "
                  >
                    <FaEnvelope
                      size={20}
                      className="text-slate-400"
                    />
                  </div>


                  {/* EMAIL INPUT */}

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      pl-6
                      pr-5
                      text-[16px]
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      autofill-input
                    "
                  />

                </div>

              </div>


              {/* ================= PASSWORD ================= */}

              <div className="mt-4">

                <label
                  className="
                    mb-1.5
                    block
                    text-[16px]
                    font-semibold
                    text-white
                  "
                >
                  Password
                </label>


                <div
                  className="
                    flex
                    h-[60px]
                    w-full
                    items-center
                    overflow-hidden
                    rounded-[17px]
                    border
                    border-slate-700
                    bg-[#111827]
                    transition
                    focus-within:border-cyan-400
                  "
                >

                  {/* LOCK ICON */}

                  <div
                    className="
                      flex
                      h-full
                      w-[68px]
                      shrink-0
                      items-center
                      justify-center
                      border-r
                      border-slate-700
                    "
                  >
                    <FaLock
                      size={20}
                      className="text-slate-400"
                    />
                  </div>


                  {/* PASSWORD INPUT */}

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      pl-6
                      pr-3
                      text-[16px]
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      autofill-input
                    "
                  />


                  {/* EYE BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      flex
                      h-full
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                      text-slate-400
                      transition
                      hover:text-cyan-400
                    "
                  >
                    {showPassword ? (
                      <FaEyeSlash size={19} />
                    ) : (
                      <FaEye size={19} />
                    )}
                  </button>

                </div>

              </div>


              {/* ================= REMEMBER / FORGOT ================= */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                "
              >

                <label
                  className="
                    flex
                    items-center
                    gap-2
                    text-[15px]
                    text-slate-300
                  "
                >

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="h-4 w-4 accent-cyan-400"
                  />

                  Remember Me

                </label>


                <Link
                  to="/forgot-password"
                  className="
                    text-[15px]
                    font-semibold
                    text-cyan-400
                    transition
                    hover:text-cyan-300
                  "
                >
                  Forgot Password?
                </Link>

              </div>


              {/* ================= ERROR ================= */}

              {error && (
                <p className="mt-3 text-center text-sm text-red-400">
                  {error}
                </p>
              )}


              {/* ================= LOGIN BUTTON ================= */}

              <button
                type="submit"
                disabled={loading}
                className="
                  mt-4
                  w-full
                  rounded-[17px]
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  py-3
                  text-[21px]
                  font-bold
                  text-slate-900
                  shadow-lg
                  shadow-cyan-500/25
                  transition
                  duration-300
                  hover:scale-[1.01]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>


            {/* ================= FOOTER ================= */}

            <p
              className="
                mt-3
                text-center
                text-[14px]
                text-slate-400
              "
            >
              Don't have an account?

              <Link
                to="/signup"
                className="
                  ml-2
                  font-semibold
                  text-cyan-400
                  hover:text-cyan-300
                "
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;