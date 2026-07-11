import { useState } from "react";
import JobFilterRow from "./JobFilterRow";
import JobList from "./JobList";
import useJobFilters from "../filterJobs";

export default function FilteredJobsPage() {
  const [activeFilters, setActiveFilters] = useState({});
  const filteredJobs = useJobFilters(activeFilters);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
        
        <JobFilterRow 
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />

        <div className="mt-8">
          <JobList jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}