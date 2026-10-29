import { useState } from "react";
import {
  FaFilePdf,
  FaUpload,
  FaSearch,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE_URL = "https://resumeiq-backend-livid.vercel.app";

const ResumeAnalyzer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setError("");
    } else {
      setSelectedFile(null);
      setError("Please select a valid PDF file.");
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      setError("Please enter the job description.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Get JWT token
      const token =
        localStorage.getItem("token") ||
        sessionStorage.getItem("token");

      if (!token) {
        setError("Please login before uploading your resume.");
        return;
      }

      // Create FormData
      const formData = new FormData();

      formData.append("resume", selectedFile);

      // Job description abhi send kar rahe hain
      // taaki later Job Description Matching mein use kar saken
      formData.append("jobDescription", jobDescription);

      // Send request to backend
      const response = await fetch(
        `${API_BASE_URL}/api/resume/upload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Resume upload failed");
      }

      console.log("Upload successful:", data);

      alert("Resume uploaded successfully!");

    } catch (error) {
      console.error("Resume upload error:", error);
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= MAIN ================= */}

      <main className="px-6 pb-24 pt-32 sm:px-8">

        <div className="mx-auto max-w-7xl">

          {/* ================= HEADER ================= */}

          <section className="mb-10">

            <p className="text-sm font-semibold text-cyan-400">
              RESUME ANALYZER
            </p>

            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Analyze Your Resume
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Upload your resume and provide a job description to
              analyze your ATS score and job match.
            </p>

          </section>

          {/* ================= ANALYZER FORM ================= */}

          <form onSubmit={handleAnalyze}>

            <div className="grid gap-6 lg:grid-cols-2">

              {/* ================= RESUME UPLOAD ================= */}

              <section
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-6
                  backdrop-blur-xl
                  sm:p-8
                "
              >

                <div className="flex items-center gap-3">

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
                    "
                  >
                    <FaFilePdf />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold">
                      Upload Resume
                    </h2>

                    <p className="text-xs text-slate-500">
                      PDF format only
                    </p>

                  </div>

                </div>

                {/* Upload Area */}

                <label
                  className="
                    mt-6
                    flex
                    min-h-52
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-dashed
                    border-cyan-400/20
                    bg-cyan-400/[0.03]
                    px-6
                    text-center
                    transition
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/[0.06]
                  "
                >

                  <FaUpload className="text-3xl text-cyan-400" />

                  <p className="mt-4 text-sm font-semibold text-white">
                    Click to upload your resume
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Only PDF files are supported
                  </p>

                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                </label>

                {/* Selected File */}

                {selectedFile && (

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-green-400/10
                      bg-green-400/5
                      p-4
                    "
                  >

                    <FaCheckCircle className="shrink-0 text-green-400" />

                    <div className="min-w-0">

                      <p className="truncate text-sm font-medium text-white">
                        {selectedFile.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        PDF selected successfully
                      </p>

                    </div>

                  </div>

                )}

              </section>

              {/* ================= JOB DESCRIPTION ================= */}

              <section
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-6
                  backdrop-blur-xl
                  sm:p-8
                "
              >

                <div className="flex items-center gap-3">

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
                    "
                  >
                    <FaSearch />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold">
                      Job Description
                    </h2>

                    <p className="text-xs text-slate-500">
                      Paste the job requirements
                    </p>

                  </div>

                </div>

                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here..."
                  className="
                    mt-6
                    min-h-52
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-950/70
                    p-4
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-slate-600
                    transition
                    focus:border-cyan-400/40
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                <p className="mt-3 text-xs text-slate-600">
                  Add the job description you want to match your resume against.
                </p>

              </section>

            </div>

            {/* Error */}

            {error && (
              <p className="mt-4 text-center text-sm text-red-400">
                {error}
              </p>
            )}

            {/* ================= ANALYZE BUTTON ================= */}

            <div className="mt-8 flex justify-center">

              <button
                type="submit"
                disabled={
                  !selectedFile ||
                  !jobDescription.trim() ||
                  loading
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  px-8
                  py-3
                  font-semibold
                  text-slate-900
                  shadow-lg
                  shadow-cyan-500/20
                  transition
                  hover:bg-cyan-300
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >

                <FaSearch />

                {loading ? "Uploading..." : "Analyze Resume"}

              </button>

            </div>

          </form>

          {/* ================= ANALYSIS PREVIEW ================= */}

          <section className="mt-16">

            <div className="mb-6">

              <p className="text-sm font-semibold text-cyan-400">
                ANALYSIS PREVIEW
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Your Results
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Results will appear here after your resume is analyzed.
              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* ATS Score */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-5
                "
              >

                <p className="text-sm text-slate-500">
                  ATS Score
                </p>

                <p className="mt-3 text-3xl font-bold text-cyan-400">
                  --/100
                </p>

              </div>

              {/* Resume Strength */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-5
                "
              >

                <p className="text-sm text-slate-500">
                  Resume Strength
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  --
                </p>

              </div>

              {/* Matched Skills */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-5
                "
              >

                <div className="flex items-center gap-2">

                  <FaCheckCircle className="text-green-400" />

                  <p className="text-sm text-slate-500">
                    Matched Skills
                  </p>

                </div>

                <p className="mt-3 text-3xl font-bold text-green-400">
                  --
                </p>

              </div>

              {/* Missing Skills */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900/60
                  p-5
                "
              >

                <div className="flex items-center gap-2">

                  <FaExclamationCircle className="text-yellow-300" />

                  <p className="text-sm text-slate-500">
                    Missing Skills
                  </p>

                </div>

                <p className="mt-3 text-3xl font-bold text-yellow-300">
                  --
                </p>

              </div>

            </div>

          </section>

        </div>

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default ResumeAnalyzer;