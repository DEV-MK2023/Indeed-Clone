import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import JobCard from "./JobCard";
import JobCard2 from "./JobCard2";
import JobDetails1 from "./JobDetails1";
import Pagination from "./Pagination";
import ResumeJobTypeCard from "./joblistHeader";
import { useNavigate } from "react-router-dom";
import SearchSuggestions from "./SearchSuggestions";

export default function JobList({ jobs = [], onApply, onSaveJob, loggedInUser }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const navigate = useNavigate();

  const { totalPages, currentJobs } = useMemo(() => {
    if (!jobs || jobs.length === 0) return { totalPages: 0, currentJobs: [] };

    const jobsPerPage = 5;
    const total = Math.ceil(jobs.length / jobsPerPage);
    const current = jobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );

    return { totalPages: total, currentJobs: current };
  }, [jobs, currentPage]);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    if (window.innerWidth < 768) {
      setShowMobileDetails(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseDetails = () => {
    setSelectedJob(null);
    setShowMobileDetails(false);
    document.body.style.overflow = "auto";
  };

  // ✅ Share/Copy Link function
  const handleShareJob = (job) => {
    const jobUrl = `${window.location.origin}/job-details/${job.id}`;
    navigator.clipboard.writeText(jobUrl).then(() => {
      alert("✅ Job link copied to clipboard!");
    });
  };

  // ✅ Protected Apply
  const handleApplyProtected = (job) => {
    if (!loggedInUser) {
      alert("Please login first to apply!");
      navigate("/login");
      return;
    }
    if (onApply) onApply(job);
  };

  // ✅ Protected Save
  const handleSaveProtected = (job) => {
    if (!loggedInUser) {
      alert("Please login first to save a job!");
      navigate("/login");
      return;
    }
    if (onSaveJob) onSaveJob(job);
  };

  if (!jobs || jobs.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">No jobs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full">
      <div
        className={`w-full md:w-1/2 ${selectedJob ? "md:w-1/2" : ""} border-r border-gray-300 ${showMobileDetails ? "hidden md:block" : ""
          }`}
      >
        <ResumeJobTypeCard />

        {currentJobs.map((job, index) =>
          job.title ? (
            <motion.div
              key={`${job.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <JobCard
                job={job}
                onDetailsClick={handleJobSelect}
                onApply={onApply}
                onSaveJob={onSaveJob}
                onShareJob={handleShareJob}
                loggedInUser={loggedInUser} // ✅ pass
              />

            </motion.div>
          ) : (
            <motion.div
              key={`${job.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <JobCard2
                job={job}
                onDetailsClick={handleJobSelect}
                onApply={handleApplyProtected}
                onSaveJob={handleSaveProtected}
                onShareJob={handleShareJob}
              />
            </motion.div>
          )
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              setSelectedJob(null);
              setShowMobileDetails(false);
            }}
          />
        )}
        <SearchSuggestions />
        
      </div>

      {selectedJob && (
        <>
          <div className="hidden md:block w-1/2">
            <JobDetails1
              job={selectedJob}
              onClose={close}
              loggedInUser={loggedInUser} // <-- pass it here
            />
          </div>
          <div
            className={`md:hidden fixed inset-0 bg-white z-50 overflow-y-auto ${showMobileDetails ? "block" : "hidden"
              }`}
          >
            <JobDetails1 job={selectedJob} onClose={handleCloseDetails} />
          </div>
        </>
      )}
    </div>
  );
}
