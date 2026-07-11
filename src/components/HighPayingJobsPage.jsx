import { useState } from "react";
import JobFilterRow from "./JobFilterRow";
import JobList from "./JobList";
import { jobs, job1 } from "../data";

export default function HighPayingJobsPage() {
  const [filters, setFilters] = useState({
    salary: "> 100,000 PKR",
    company: null,
    location: null,
  });

  const filterHighPayingJobs = () => {
    return [...jobs, ...job1].filter(job => {
      // Convert salary string to number for comparison
      const salaryMatch = job.salaryRs.match(/(\d+,?\d+)/);
      if (!salaryMatch) return false;
      
      const salaryNum = parseInt(salaryMatch[1].replace(/,/g, ''));
      if (salaryNum < 100000) return false;
      
      // Apply other filters
      if (filters.company && job.company !== filters.company) return false;
      if (filters.location && job.city !== filters.location) return false;
      
      return true;
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">High Paying Jobs</h1>
        <p className="text-gray-600 mb-6">Opportunities with salaries above 100,000 PKR</p>
        
        <JobFilterRow 
          onFilterChange={(section, value) => 
            setFilters(prev => ({ ...prev, [section]: value }))
          }
          selectedFilters={filters}
          // Only show relevant filters for high paying jobs
          filterOptions={['company', 'location']}
        />

        <div className="mt-8">
          <JobList jobs={filterHighPayingJobs()} />
        </div>
      </div>
    </div>
  );
}