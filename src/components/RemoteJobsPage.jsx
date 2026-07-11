import { useState } from "react";
import JobFilterRow from "./JobFilterRow";
import JobList from "./JobList";
import { jobs, job1 } from "../data";
import JobDetails1 from "./JobDetails1";

export default function RemoteJobsPage() {
  const [filters, setFilters] = useState({
    jobType: null,
    salary: null,
  });

  const filterRemoteJobs = () => {
    return [...jobs, ...job1].filter(job => {
      // Only show remote jobs
      if (job.location !== "Remote") return false;
      
      // Apply other filters
      if (filters.jobType === "Full-time" && job.type !== "full-time") return false;
      if (filters.jobType === "Part-time" && job.type !== "part-time") return false;
      
      return true;
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Remote Job Opportunities</h1>
        <p className="text-gray-600 mb-6">Work from anywhere in the world</p>
        
        <JobFilterRow 
          onFilterChange={(section, value) => 
            setFilters(prev => ({ ...prev, [section]: value }))
          }
          selectedFilters={filters}
          // Only show relevant filters for remote jobs
          filterOptions={['jobType', 'salary']}
        />

        <div className="mt-8">
          <JobList jobs={filterRemoteJobs()} />
        </div>
      </div>
    </div>
  );
}