import React, { useState } from "react";
import SearchBar from "./SearchBar";
import JobList from "./JobList";

export default function JobPage({ jobs }) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <div>
      <SearchBar jobs={jobs} setFilteredJobs={setFilteredJobs} />
      <JobList jobs={filteredJobs} />
    </div>
  );
}
