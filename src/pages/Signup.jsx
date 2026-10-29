import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://resumeiq-backend-livid.vercel.app";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Message
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Check password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // Signup successful
      alert("Account created successfully!");

      // Go to login page
      navigate("/login");

    } catch (error) {
      console.error("Signup error:", error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-[#020617]
        bg-cover
        bg-center
        bg-no-repeat
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/signup-bg.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        className="
          min-h-screen
          bg-[#020617]/45
          flex
          items-center
          justify-center
          px-4
          py-3
        "
      >

        {/* OUTER CARD */}
        <div
          className="
            w-full
            max-w-[760px]
            rounded-[28px]
            border
            border-cyan-500/20
            bg-[#0b1220]/90
            px-8
            py-4
            shadow-[0_20px_90px_rgba(0,0,0,.55)]
            backdrop-blur-xl
          "
        >

          {/* ================= HEADING ================= */}

          <div className="text-center">

            <h1
              className="
                text-[36px]
                font-black
                leading-none
                tracking-[-1.5px]
                text-white
              "
            >
              Create{" "}
              <span className="text-cyan-400">
                Account
              </span>

              <span className="ml-2">
                🚀
              </span>
            </h1>

            <p
              className="
                mt-1.5
                text-[16px]
                text-slate-400
              "
            >
              Start your journey toward a better career.
            </p>

          </div>


          {/* ================= FORM ================= */}

          <form
            className="mt-3.5"
            onSubmit={handleSubmit}
          >

            {/* ================= FULL NAME ================= */}

            <div>

              <label
                className="
                  mb-1
                  block
                  text-[15px]
                  font-semibold
                  text-white
                "
              >
                Full Name
              </label>

              <div
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-slate-700
                  bg-[#111827]
                  transition
                  focus-within:border-cyan-400
                "
              >

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
                  <FaUser
                    size={18}
                    className="text-slate-400"
                  />
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-5
                    text-[15px]
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    autofill:[-webkit-text-fill-color:#ffffff]
                    autofill:[-webkit-box-shadow:0_0_0px_1000px_#111827_inset]
                  "
                />

              </div>

            </div>


            {/* ================= EMAIL ================= */}

            <div className="mt-2">

              <label
                className="
                  mb-1
                  block
                  text-[15px]
                  font-semibold
                  text-white
                "
              >
                Email Address
              </label>

              <div
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-slate-700
                  bg-[#111827]
                  transition
                  focus-within:border-cyan-400
                "
              >

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
                    size={18}
                    className="text-slate-400"
                  />
                </div>

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
                    px-5
                    text-[15px]
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    autofill:[-webkit-text-fill-color:#ffffff]
                    autofill:[-webkit-box-shadow:0_0_0px_1000px_#111827_inset]
                  "
                />

              </div>

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="mt-2">

              <label
                className="
                  mb-1
                  block
                  text-[15px]
                  font-semibold
                  text-white
                "
              >
                Password
              </label>

              <div
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-slate-700
                  bg-[#111827]
                  transition
                  focus-within:border-cyan-400
                "
              >

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
                    size={18}
                    className="text-slate-400"
                  />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-5
                    text-[15px]
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    autofill:[-webkit-text-fill-color:#ffffff]
                    autofill:[-webkit-box-shadow:0_0_0px_1000px_#111827_inset]
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    flex
                    h-full
                    w-[56px]
                    shrink-0
                    items-center
                    justify-center
                    text-slate-400
                    transition
                    hover:text-cyan-400
                  "
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* ================= CONFIRM PASSWORD ================= */}

            <div className="mt-2">

              <label
                className="
                  mb-1
                  block
                  text-[15px]
                  font-semibold
                  text-white
                "
              >
                Confirm Password
              </label>

              <div
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-slate-700
                  bg-[#111827]
                  transition
                  focus-within:border-cyan-400
                "
              >

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
                    size={18}
                    className="text-slate-400"
                  />
                </div>

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-5
                    text-[15px]
                    text-white
                    placeholder:text-slate-500
                    outline-none
                    autofill:[-webkit-text-fill-color:#ffffff]
                    autofill:[-webkit-box-shadow:0_0_0px_1000px_#111827_inset]
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="
                    flex
                    h-full
                    w-[56px]
                    shrink-0
                    items-center
                    justify-center
                    text-slate-400
                    transition
                    hover:text-cyan-400
                  "
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* ================= TERMS ================= */}

            <div className="mt-2">

              <label
                className="
                  flex
                  items-center
                  gap-2
                  text-[13px]
                  text-slate-300
                "
              >

                <input
                  type="checkbox"
                  className="
                    h-4
                    w-4
                    shrink-0
                    accent-cyan-400
                  "
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="
                      text-cyan-400
                      hover:text-cyan-300
                    "
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="
                      text-cyan-400
                      hover:text-cyan-300
                    "
                  >
                    Privacy Policy
                  </button>
                  .
                </span>

              </label>

            </div>


            {/* ================= ERROR ================= */}

            {error && (
              <p className="mt-2 text-center text-sm text-red-400">
                {error}
              </p>
            )}


            {/* ================= CREATE ACCOUNT ================= */}

            <button
              type="submit"
              disabled={loading}
              className="
                mt-2.5
                w-full
                rounded-[15px]
                bg-gradient-to-r
                from-cyan-400
                to-sky-500
                py-2
                text-[19px]
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
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>


          {/* ================= FOOTER ================= */}

          <p
            className="
              mt-2
              text-center
              text-[14px]
              text-slate-400
            "
          >
            Already have an account?

            <Link
              to="/login"
              className="
                ml-2
                font-semibold
                text-cyan-400
                hover:text-cyan-300
              "
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
};

export default Signup;