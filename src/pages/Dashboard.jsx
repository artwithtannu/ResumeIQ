import { useEffect, useState } from "react";
import {
  FaFileAlt,
  FaChartLine,
  FaHistory,
  FaCog,
  FaUpload,
  FaArrowUp,
  FaCheckCircle,
  FaUserCircle,
  FaSignOutAlt,
  FaTrash,
  FaEye,
  FaDownload,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://resumeiq-backend-livid.vercel.app";

const Dashboard = () => {
  const navigate = useNavigate();

  // =========================
  // STATES
  // =========================

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const [atsScore, setAtsScore] = useState(null);
  const [resumeHealth, setResumeHealth] = useState("");
  const [interviewReadiness, setInterviewReadiness] = useState(null);
  const [todayAnalysisCount, setTodayAnalysisCount] = useState(0);

  const [analysis, setAnalysis] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);

  const [summary, setSummary] = useState("");
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [actionVerbs, setActionVerbs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState("");

  const [selectedHistory, setSelectedHistory] = useState(null);

  const [jobDescription, setJobDescription] = useState("");
  const [jobMatchResult, setJobMatchResult] = useState(null);
  const [jobMatchLoading, setJobMatchLoading] = useState(false);
  const [jobMatchError, setJobMatchError] = useState("");

  // =========================
  // TOKEN
  // =========================

  const getToken = () => {
    return (
      localStorage.getItem("token") ||
      sessionStorage.getItem("token")
    );
  };

  // =========================
  // FETCH RESUME ANALYSIS
  // =========================

  const fetchResumeAnalysis = async (recordAnalysis = false) => {
    try {
      setAnalysisLoading(true);

      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const url = recordAnalysis
        ? `${API_BASE_URL}/api/analysis/resume?record=true`
        : `${API_BASE_URL}/api/analysis/resume`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch analysis"
        );
      }

      const result = data.analysis || data;

      setAnalysis(result);

      setAtsScore(
        result.atsScore ??
        result.atsScorePercentage ??
        null
      );

      setResumeHealth(
        result.resumeHealth ||
        result.health ||
        ""
      );

      setInterviewReadiness(
        result.interviewReadiness ??
        result.interviewReadinessScore ??
        null
      );

      setTodayAnalysisCount(
        data.todayAnalysisCount ??
        result.todayAnalysisCount ??
        0
      );

      setSummary(result.summary || "");
      setProjects(result.projects || []);
      setExperience(result.experience || []);
      setActionVerbs(result.actionVerbs || []);
      setSuggestions(result.suggestions || []);
    } catch (error) {
      console.error("Analysis fetch error:", error);

      if (
        error.message?.toLowerCase().includes("no resume") ||
        error.message?.toLowerCase().includes("resume found")
      ) {
        setAnalysis(null);
      }
    } finally {
      setAnalysisLoading(false);
    }
  };

  // =========================
  // FETCH HISTORY
  // =========================

  const fetchAnalysisHistory = async () => {
    try {
      setHistoryLoading(true);
      setHistoryError("");

      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/api/analysis/history`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to fetch analysis history"
        );
      }

      setHistory(
        data.history ||
        data.analyses ||
        []
      );
    } catch (error) {
      console.error("History fetch error:", error);
      setHistoryError(error.message);
    } finally {
      setHistoryLoading(false);
    }
  };

  // =========================
  // VIEW SINGLE ANALYSIS
  // =========================

  const handleViewAnalysis = async (analysisId) => {
    try {
      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/api/analysis/history/${analysisId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to fetch analysis"
        );
      }

      const selectedAnalysis =
        data.analysis || data;

      setSelectedHistory(selectedAnalysis);
    } catch (error) {
      console.error(
        "View analysis error:",
        error
      );
    }
  };

  // =========================
  // DELETE ANALYSIS
  // =========================

  const handleDeleteAnalysis = async (analysisId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this analysis?"
    );

    if (!confirmDelete) return;

    try {
      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/api/analysis/history/${analysisId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to delete analysis"
        );
      }

      if (
        selectedHistory &&
        (selectedHistory._id === analysisId ||
          selectedHistory.id === analysisId)
      ) {
        setSelectedHistory(null);
      }

      await fetchAnalysisHistory();
    } catch (error) {
      console.error(
        "Delete analysis error:",
        error
      );
    }
  };

  // =========================
  // DOWNLOAD PDF
  // =========================

  const handleDownloadPDF = async (analysisId) => {
    try {
      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/api/analysis/history/${analysisId}/pdf`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        let message =
          "Failed to download PDF";

        try {
          const data = await response.json();
          message = data.message || message;
        } catch {
          // Ignore JSON parsing error
        }

        throw new Error(message);
      }

      const blob = await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;
      link.download =
        "ResumeIQ-Analysis-Report.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(
        "PDF download error:",
        error
      );
    }
  };

  // =========================
  // FETCH USER PROFILE
  // =========================

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getToken();

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `${API_BASE_URL}/api/auth/profile`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
            "Failed to fetch profile"
          );
        }

        setUser(data.user || data);
      } catch (error) {
        console.error(
          "Profile fetch error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  // =========================
  // INITIAL DATA
  // =========================

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/login");
      return;
    }

    fetchResumeAnalysis(false);
    fetchAnalysisHistory();
  }, [navigate]);

  // =========================
  // RESUME UPLOAD
  // =========================

  const handleResumeUpload = async () => {
    if (!resumeFile) {
      setUploadMessage(
        "Please select a resume file."
      );
      return;
    }

    if (
      resumeFile.type !== "application/pdf"
    ) {
      setUploadMessage(
        "Only PDF files are allowed."
      );
      return;
    }

    try {
      setUploading(true);
      setUploadMessage("");

      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const formData = new FormData();

      formData.append(
        "resume",
        resumeFile
      );

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
        throw new Error(
          data.message ||
          "Resume upload failed"
        );
      }

      setUploadMessage(
        data.message ||
        "Resume uploaded successfully!"
      );

      setResumeFile(null);

      await fetchResumeAnalysis(true);
      await fetchAnalysisHistory();
    } catch (error) {
      console.error(
        "Resume upload error:",
        error
      );

      setUploadMessage(
        error.message ||
        "Resume upload failed."
      );
    } finally {
      setUploading(false);
    }
  };

  // =========================
  // JOB DESCRIPTION MATCH
  // =========================

  const handleJobMatch = async () => {
    if (!jobDescription.trim()) {
      setJobMatchError(
        "Please enter a job description."
      );
      return;
    }

    try {
      setJobMatchLoading(true);
      setJobMatchError("");
      setJobMatchResult(null);

      const token = getToken();

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}/api/job-match/match`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            jobDescription:
              jobDescription.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Job description matching failed"
        );
      }

      setJobMatchResult(
        data.match || data
      );
    } catch (error) {
      console.error(
        "Job match error:",
        error
      );

      setJobMatchError(
        error.message ||
        "Job description matching failed."
      );
    } finally {
      setJobMatchLoading(false);
    }
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    navigate("/login");
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  // =========================
  // DASHBOARD
  // =========================

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              ResumeIQ
            </h1>

            <p className="text-xs text-slate-400">
              AI Career Assistant
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="hidden md:block text-right">
              <p className="font-medium">
                {user?.name || "User"}
              </p>

              <p className="text-xs text-slate-400">
                {user?.email || ""}
              </p>
            </div>

            <FaUserCircle className="text-3xl text-slate-400" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              <FaSignOutAlt />
              <span className="hidden sm:inline">
                Logout
              </span>
            </button>

          </div>

        </div>

      </nav>

      {/* =========================
          MAIN
      ========================= */}

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome */}

        <section>

          <h2 className="text-3xl font-bold">
            Welcome back,{" "}
            {user?.name || "User"} 👋
          </h2>

          <p className="mt-2 text-slate-400">
            Analyze your resume and get smarter career insights.
          </p>

        </section>

        {/* =========================
            STATS
        ========================= */}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          {/* ATS */}

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  ATS Score
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {analysisLoading
                    ? "..."
                    : atsScore !== null
                    ? `${atsScore}%`
                    : "--"}
                </h3>

              </div>

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaFileAlt className="text-blue-600 text-xl" />
              </div>

            </div>

            {atsScore !== null && (
              <div className="flex items-center gap-1 text-green-600 text-sm mt-4">
                <FaArrowUp />
                <span>
                  Resume ATS compatibility
                </span>
              </div>
            )}

          </div>

          {/* Resume Health */}

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Resume Health
                </p>

                <h3 className="text-2xl font-bold mt-3">
                  {analysisLoading
                    ? "..."
                    : resumeHealth || "--"}
                </h3>

              </div>

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>

            </div>

          </div>

          {/* Interview */}

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Interview Readiness
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {analysisLoading
                    ? "..."
                    : interviewReadiness !== null
                    ? `${interviewReadiness}/100`
                    : "--"}
                </h3>

              </div>

              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <FaChartLine className="text-purple-600 text-xl" />
              </div>

            </div>

          </div>

          {/* Today */}

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Resume Analysis
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {todayAnalysisCount}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Today
                </p>

              </div>

              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <FaHistory className="text-orange-600 text-xl" />
              </div>

            </div>

          </div>

        </section>

        {/* =========================
            IMPROVEMENT SUGGESTIONS
        ========================= */}

        {suggestions.length > 0 && (

          <section className="mt-8">

            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-600 text-xl" />

                <h2 className="text-xl font-bold">
                  Resume Improvement Suggestions
                </h2>

              </div>

              <div className="mt-5 space-y-3">

                {suggestions.map(
                  (suggestion, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-slate-50"
                    >

                      <FaArrowUp className="text-blue-600 mt-1" />

                      <p className="text-slate-700">
                        {typeof suggestion === "string"
                          ? suggestion
                          : suggestion.text ||
                            suggestion.message ||
                            JSON.stringify(
                              suggestion
                            )}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

          </section>

        )}

        {/* =========================
            DETAILED ANALYSIS
        ========================= */}

        {analysis && (

          <section className="mt-8">

            <h2 className="text-2xl font-bold mb-5">
              Detailed Resume Analysis
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Summary */}

              <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

                <h3 className="text-lg font-bold">
                  Summary
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {summary || "No summary available."}
                </p>

              </div>

              {/* Action Verbs */}

              <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

                <h3 className="text-lg font-bold">
                  Action Verbs
                </h3>

                {actionVerbs.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-4">

                    {actionVerbs.map(
                      (verb, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 rounded-full bg-blue-100 text-blue-700 text-sm"
                        >
                          {verb}
                        </span>
                      )
                    )}

                  </div>
                ) : (
                  <p className="text-slate-500 mt-3">
                    No action verbs found.
                  </p>
                )}

              </div>

              {/* Projects */}

              <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

                <h3 className="text-lg font-bold">
                  Projects
                </h3>

                {projects.length > 0 ? (

                  <div className="mt-4 space-y-3">

                    {projects.map(
                      (project, index) => (

                        <div
                          key={index}
                          className="p-4 rounded-lg bg-slate-50"
                        >

                          <p className="text-slate-700">

                            {typeof project ===
                            "string"
                              ? project
                              : project.name ||
                                project.title ||
                                JSON.stringify(
                                  project
                                )}

                          </p>

                        </div>

                      )
                    )}

                  </div>

                ) : (
                  <p className="text-slate-500 mt-3">
                    No projects found.
                  </p>
                )}

              </div>

              {/* Experience */}

              <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

                <h3 className="text-lg font-bold">
                  Experience
                </h3>

                {experience.length > 0 ? (

                  <div className="mt-4 space-y-3">

                    {experience.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="p-4 rounded-lg bg-slate-50"
                        >

                          <p className="text-slate-700">

                            {typeof item ===
                            "string"
                              ? item
                              : item.role ||
                                item.position ||
                                item.title ||
                                JSON.stringify(
                                  item
                                )}

                          </p>

                        </div>

                      )
                    )}

                  </div>

                ) : (
                  <p className="text-slate-500 mt-3">
                    No experience found.
                  </p>
                )}

              </div>

            </div>

          </section>

        )}

        {/* =========================
            JOB DESCRIPTION MATCHING
        ========================= */}

        <section className="mt-8">

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center gap-3">

              <FaChartLine className="text-blue-600 text-xl" />

              <h2 className="text-2xl font-bold">
                Job Description Matching
              </h2>

            </div>

            <p className="text-slate-500 mt-2">
              Compare your resume with a specific job description.
            </p>

            <textarea
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value);
                setJobMatchError("");
              }}
              placeholder="Paste job description here..."
              className="w-full min-h-44 mt-5 p-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />

            {jobMatchError && (
              <p className="mt-3 text-red-600 text-sm">
                {jobMatchError}
              </p>
            )}

            <button
              onClick={handleJobMatch}
              disabled={
                jobMatchLoading ||
                !jobDescription.trim()
              }
              className="mt-4 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <FaChartLine />

              {jobMatchLoading
                ? "Matching..."
                : "Match Resume"}
            </button>

            {jobMatchResult && (

              <div className="mt-6 border border-slate-200 rounded-xl p-6 bg-slate-50">

                <h3 className="text-xl font-bold">
                  Match Result
                </h3>

                {/* Percentage */}

                <div className="mt-5 flex items-center gap-5">

                  <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center">

                    <span className="text-xl font-bold">
                      {jobMatchResult.matchPercentage ??
                        0}
                      %
                    </span>

                  </div>

                  <div>

                    <p className="font-semibold">
                      Resume Match
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Based on skills found in the resume and job description.
                    </p>

                  </div>

                </div>

                {/* Matched Skills */}

                {jobMatchResult.matchedSkills
                  ?.length > 0 && (

                  <div className="mt-6">

                    <h4 className="font-semibold">
                      Matched Skills
                    </h4>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {jobMatchResult.matchedSkills.map(
                        (skill, index) => (

                          <span
                            key={index}
                            className="px-3 py-2 rounded-full bg-green-100 text-green-700 text-sm"
                          >
                            {skill}
                          </span>

                        )
                      )}

                    </div>

                  </div>

                )}

                {/* Missing Skills */}

                {jobMatchResult.missingSkills
                  ?.length > 0 && (

                  <div className="mt-6">

                    <h4 className="font-semibold">
                      Missing Skills
                    </h4>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {jobMatchResult.missingSkills.map(
                        (skill, index) => (

                          <span
                            key={index}
                            className="px-3 py-2 rounded-full bg-red-100 text-red-700 text-sm"
                          >
                            {skill}
                          </span>

                        )
                      )}

                    </div>

                  </div>

                )}

                {/* Suggestions */}

                {jobMatchResult.suggestions
                  ?.length > 0 && (

                  <div className="mt-6">

                    <h4 className="font-semibold">
                      Suggestions
                    </h4>

                    <div className="mt-3 space-y-2">

                      {jobMatchResult.suggestions.map(
                        (suggestion, index) => (

                          <div
                            key={index}
                            className="flex items-start gap-2"
                          >

                            <FaCheckCircle className="text-blue-600 mt-1" />

                            <p className="text-slate-600">
                              {typeof suggestion ===
                              "string"
                                ? suggestion
                                : suggestion.text ||
                                  suggestion.message ||
                                  JSON.stringify(
                                    suggestion
                                  )}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                )}

              </div>

            )}

          </div>

        </section>

        {/* =========================
            UPLOAD + QUICK ACTIONS
        ========================= */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">

          {/* Upload */}

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center gap-3">

              <FaUpload className="text-blue-600 text-xl" />

              <h2 className="text-xl font-bold">
                Analyze Your Resume
              </h2>

            </div>

            <p className="text-slate-500 mt-2">
              Upload a PDF resume to generate your analysis.
            </p>

            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={(e) => {
                setResumeFile(
                  e.target.files?.[0] ||
                    null
                );
                setUploadMessage("");
              }}
              className="mt-5 block w-full text-sm"
            />

            {resumeFile && (
              <p className="mt-3 text-sm text-slate-600">
                Selected: {resumeFile.name}
              </p>
            )}

            <button
              onClick={handleResumeUpload}
              disabled={uploading}
              className="mt-4 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
            >
              <FaUpload />

              {uploading
                ? "Uploading..."
                : "Upload Resume"}
            </button>

            {uploadMessage && (
              <p className="mt-3 text-sm text-slate-600">
                {uploadMessage}
              </p>
            )}

          </div>

          {/* Quick Actions */}

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center gap-3">

              <FaCog className="text-purple-600 text-xl" />

              <h2 className="text-xl font-bold">
                Quick Actions
              </h2>

            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="p-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-left"
              >
                <FaFileAlt className="text-blue-600 mb-2" />

                <p className="font-medium">
                  Resume Analysis
                </p>
              </button>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="p-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-left"
              >
                <FaChartLine className="text-green-600 mb-2" />

                <p className="font-medium">
                  ATS Score
                </p>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById(
                      "history-section"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="p-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-left"
              >
                <FaHistory className="text-purple-600 mb-2" />

                <p className="font-medium">
                  Resume History
                </p>
              </button>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className="p-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-left"
              >
                <FaCog className="text-slate-600 mb-2" />

                <p className="font-medium">
                  Profile
                </p>
              </button>

            </div>

          </div>

        </section>

        {/* =========================
            HISTORY
        ========================= */}

        <section
          id="history-section"
          className="mt-8"
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <FaHistory className="text-purple-600 text-xl" />

              <h2 className="text-2xl font-bold">
                Resume History
              </h2>

            </div>

          </div>

          {historyError && (
            <p className="mt-4 text-red-500">
              {historyError}
            </p>
          )}

          {historyLoading ? (

            <p className="mt-5 text-slate-400">
              Loading history...
            </p>

          ) : history.length > 0 ? (

            <div className="mt-5 space-y-4">

              {history.map((item) => {

                const id =
                  item._id || item.id;

                return (

                  <div
                    key={id}
                    className="bg-white text-slate-900 rounded-xl p-5 shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-5"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {item.fileName ||
                          item.resumeName ||
                          "Resume Analysis"}
                      </h3>

                      {item.createdAt && (
                        <p className="text-sm text-slate-500 mt-1">
                          {new Date(
                            item.createdAt
                          ).toLocaleString()}
                        </p>
                      )}

                    </div>

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() =>
                          handleViewAnalysis(id)
                        }
                        title="View Analysis"
                        className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() =>
                          handleDownloadPDF(id)
                        }
                        title="Download PDF"
                        className="p-3 rounded-lg bg-slate-100 hover:bg-slate-200"
                      >
                        <FaDownload />
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteAnalysis(id)
                        }
                        title="Delete Analysis"
                        className="p-3 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </div>

                );
              })}

            </div>

          ) : (

            <div className="mt-5 bg-white text-slate-900 rounded-xl p-6 shadow-lg">

              <p className="text-slate-500">
                No analysis history found.
              </p>

            </div>

          )}

        </section>

        {/* =========================
            SELECTED PREVIOUS ANALYSIS
        ========================= */}

        {selectedHistory && (

          <section className="mt-8">

            <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                <div>

                  <h2 className="text-2xl font-bold">
                    Previous Analysis
                  </h2>

                  <p className="text-slate-500 mt-1">
                    {selectedHistory.fileName ||
                      "Resume Analysis"}
                  </p>

                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() =>
                      handleDownloadPDF(
                        selectedHistory._id ||
                          selectedHistory.id
                      )
                    }
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                  >
                    <FaDownload />
                    Download PDF
                  </button>

                  <button
                    onClick={() =>
                      setSelectedHistory(null)
                    }
                    className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300"
                  >
                    Close
                  </button>

                </div>

              </div>

              {/* Previous scores */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                <div className="p-5 rounded-lg bg-slate-50">

                  <p className="text-sm text-slate-500">
                    ATS Score
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    {selectedHistory.atsScore ??
                      "--"}
                    {selectedHistory.atsScore !==
                      undefined &&
                      "%"}
                  </p>

                </div>

                <div className="p-5 rounded-lg bg-slate-50">

                  <p className="text-sm text-slate-500">
                    Resume Health
                  </p>

                  <p className="text-2xl font-bold mt-2">
                    {selectedHistory.resumeHealth ||
                      selectedHistory.health ||
                      "--"}
                  </p>

                </div>

                <div className="p-5 rounded-lg bg-slate-50">

                  <p className="text-sm text-slate-500">
                    Interview Readiness
                  </p>

                  <p className="text-3xl font-bold mt-2">
                    {selectedHistory.interviewReadiness ??
                      selectedHistory.interviewReadinessScore ??
                      "--"}
                    {(selectedHistory.interviewReadiness !==
                      undefined ||
                      selectedHistory.interviewReadinessScore !==
                        undefined) &&
                      "/100"}
                  </p>

                </div>

              </div>

              {/* Word Count */}

              {selectedHistory.resumeText && (

                <div className="mt-5 p-5 rounded-lg bg-slate-50">

                  <p className="text-sm text-slate-500">
                    Word Count
                  </p>

                  <p className="text-2xl font-bold mt-2">
                    {
                      selectedHistory.resumeText
                        .trim()
                        .split(/\s+/)
                        .filter(Boolean)
                        .length
                    }
                  </p>

                </div>

              )}

              {/* Summary */}

              {selectedHistory.summary && (

                <div className="mt-5">

                  <h3 className="font-bold text-lg">
                    Summary
                  </h3>

                  <p className="text-slate-600 mt-2 leading-7">
                    {selectedHistory.summary}
                  </p>

                </div>

              )}

              {/* Projects */}

              {selectedHistory.projects
                ?.length > 0 && (

                <div className="mt-6">

                  <h3 className="font-bold text-lg">
                    Projects
                  </h3>

                  <div className="mt-3 space-y-2">

                    {selectedHistory.projects.map(
                      (project, index) => (

                        <div
                          key={index}
                          className="p-3 bg-slate-50 rounded-lg"
                        >
                          {typeof project ===
                          "string"
                            ? project
                            : project.name ||
                              project.title ||
                              JSON.stringify(
                                project
                              )}
                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

              {/* Experience */}

              {selectedHistory.experience
                ?.length > 0 && (

                <div className="mt-6">

                  <h3 className="font-bold text-lg">
                    Experience
                  </h3>

                  <div className="mt-3 space-y-2">

                    {selectedHistory.experience.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="p-3 bg-slate-50 rounded-lg"
                        >
                          {typeof item ===
                          "string"
                            ? item
                            : item.role ||
                              item.position ||
                              JSON.stringify(
                                item
                              )}
                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

              {/* Action Verbs */}

              {selectedHistory.actionVerbs
                ?.length > 0 && (

                <div className="mt-6">

                  <h3 className="font-bold text-lg">
                    Action Verbs
                  </h3>

                  <p className="text-slate-600 mt-2">
                    {selectedHistory.actionVerbs.join(
                      ", "
                    )}
                  </p>

                </div>

              )}

              {/* Suggestions */}

              {selectedHistory.suggestions
                ?.length > 0 && (

                <div className="mt-6">

                  <h3 className="font-bold text-lg">
                    Suggestions
                  </h3>

                  <div className="mt-3 space-y-2">

                    {selectedHistory.suggestions.map(
                      (suggestion, index) => (

                        <div
                          key={index}
                          className="flex gap-2 text-slate-600"
                        >

                          <FaCheckCircle className="text-green-600 mt-1" />

                          <span>
                            {typeof suggestion ===
                            "string"
                              ? suggestion
                              : suggestion.text ||
                                suggestion.message ||
                                JSON.stringify(
                                  suggestion
                                )}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>

          </section>

        )}

        {/* =========================
            PROFILE
        ========================= */}

        <section className="mt-8">

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">

            <div className="flex items-center gap-3">

              <FaUserCircle className="text-3xl text-slate-500" />

              <h2 className="text-xl font-bold">
                Profile Information
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              <div>

                <p className="text-sm text-slate-500">
                  Name
                </p>

                <p className="font-medium mt-1">
                  {user?.name || "--"}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="font-medium mt-1">
                  {user?.email || "--"}
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Dashboard;