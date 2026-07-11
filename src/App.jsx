import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import JobFilterRow from "./components/JobFilterRow";
import JobList from "./components/JobList";
import SignupPage from "./components/signUp";
import MyApplications from "./components/MyApplications";
import JobDetailsPage from "./components/JobDetailsPage";
import CompanyReviews from "./components/companyReviews";
import RemoteJobsPage from "./components/RemoteJobsPage";
import HighPayingJobsPage from "./components/HighPayingJobsPage";
import SalaryPage from "./components/SalaryPage";
import ApplyModal from "./components/ApplyModal";
import SavedJobs from "./components/SavedJobsPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // modal
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Saved jobs
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  );

  // Logged-in user
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser")) || null
  );

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/jobs.json");
        const data = await res.json();
        setJobs(data.jobs);
        setFilteredJobs(data.jobs);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Apply job
  const handleApply = (job) => {
    if (!loggedInUser) {
      alert("⚠️ Please login first to apply!");
      navigate("/login");
      return;
    }
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  // Save job
  const handleSaveJob = (job) => {
    if (!loggedInUser) {
      alert("⚠️ Please login first to save a job!");
      navigate("/login");
      return;
    }
    setSavedJobs((prev) => {
      if (prev.find((j) => j.id === job.id)) return prev;
      const updated = [...prev, job];
      localStorage.setItem("savedJobs", JSON.stringify(updated));
      return updated;
    });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {isLoading ? (
          <div className="text-center py-8">Loading jobs...</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar jobs={jobs} setFilteredJobs={setFilteredJobs} />
                  <JobFilterRow
                    jobs={filteredJobs}
                    setFilteredJobs={setFilteredJobs}
                  />
                  <JobList
                    jobs={filteredJobs}
                    onApply={handleApply}
                    onSaveJob={handleSaveJob}
                    loggedInUser={loggedInUser} // ✅ pass
                  />
                </>
              }
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/job-details-page/:jobId"
              element={
                <JobDetailsPage
                  jobs={jobs}
                  onApply={handleApply}
                  loggedInUser={loggedInUser} // ✅ pass
                  onSaveJob={handleSaveJob}
                />
              }
            />
            <Route path="/company-review" element={<CompanyReviews />} />
            <Route path="/salaries/:companyId" element={<SalaryPage />} />
            <Route path="/remote-jobs" element={<RemoteJobsPage />} />
            <Route path="/applications" element={<MyApplications />} />
            <Route path="/high-paying-jobs" element={<HighPayingJobsPage />} />
            <Route
              path="/register"
              element={<Register onRegister={() => navigate("/login")} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  onLogin={(user) => {
                    setLoggedInUser(user);
                    navigate("/");
                  }}
                />
              }
            />
            <Route
              path="/saved-jobs"
              element={
                <SavedJobs
                  savedJobs={savedJobs}
                  onSaveJob={handleSaveJob}
                  loggedInUser={loggedInUser} // ✅ pass
                />
              }
            />
          </Routes>
        )}
      </div>
      <Footer />

      {showApplyModal && (
        <ApplyModal job={selectedJob} onClose={() => setShowApplyModal(false)} />
      )}
    </div>
  );
}

export default App;
