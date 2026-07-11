import { useState, useMemo } from "react";
import JobFilterRow from "./JobFilterRow";
import JobList from "./JobList";
import { jobs, job1 } from "../data";

export default function FilteredJobList() {
  const allJobs = [...jobs, ...job1];
  const [filters, setFilters] = useState({
    salary: null,
    distance: null,
    company: "",
    jobType: "",
    jobLanguage: null,
    location: "",
    datePosted: null,
  });

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      // Salary filter
      if (filters.salary) {
        const salary = parseInt(job.salaryRs?.replace(/[^0-9]/g, '')) || 0;
        if (filters.salary === "< 50,000 PKR" && salary > 50000) return false;
        if (filters.salary === "50,000 - 100,000 PKR" && (salary < 50000 || salary > 100000)) return false;
        if (filters.salary === "> 100,000 PKR" && salary <= 100000) return false;
      }

      // Location filter
      if (filters.location && job.city !== filters.location) return false;

      // Type filter
      if (filters.jobType && job.type !== filters.jobType) return false;

      // Company filter
      if (filters.company && job.company !== filters.company) return false;

      return true;
    });
  }, [filters]);

  // Create unique dropdown options
  const getOptions = (field) => {
    const values = [...new Set(allJobs.map((job) => job[field]).filter(Boolean))];
    return values.map((val) => (
      <option key={val} value={val}>
        {val}
      </option>
    ));
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Filtered Job Listings</h1>

        {/* Existing Filter UI */}
        <JobFilterRow
          onFilterChange={(section, value) =>
            setFilters((prev) => ({ ...prev, [section]: value }))
          }
          selectedFilters={filters}
        />

        {/* New Dropdown Filters (location, type, company) */}
        <div className="flex gap-4 mb-6">
          <select
            name="location"
            value={filters.location}
            onChange={handleDropdownChange}
            className="border p-2 rounded"
          >
            <option value="">All Locations</option>
            {getOptions("city")}
          </select>

          <select
            name="jobType"
            value={filters.jobType}
            onChange={handleDropdownChange}
            className="border p-2 rounded"
          >
            <option value="">All Types</option>
            {getOptions("type")}
          </select>

          <select
            name="company"
            value={filters.company}
            onChange={handleDropdownChange}
            className="border p-2 rounded"
          >
            <option value="">All Companies</option>
            {getOptions("company")}
          </select>
        </div>

        {/* Job Results */}
        <div className="mt-8">
          <JobList jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}
