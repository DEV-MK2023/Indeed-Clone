import { useEffect, useState } from "react";
import { FaRegBookmark, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(stored);
  }, []);

  const handleRemove = (jobId) => {
    const updated = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  if (savedJobs.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
        <p className="text-gray-600">No saved jobs yet. Go save some!</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Saved Jobs</h2>

      <div className="grid gap-4">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500">{job.city}, {job.location}</p>
              <span className="text-blue-700 font-bold">{job.salary}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* ✅ Link to JobDetailsPage */}
              <Link
                to={`/job-details-page/${job.id}`}
                className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                View
              </Link>

              <button
                onClick={() => handleRemove(job.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedJobsPage;
