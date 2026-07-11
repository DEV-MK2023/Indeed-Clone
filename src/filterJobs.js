// filterJobs.js

const filterJobs = (jobs, { jobQuery = "", locationQuery = "", filters = {} }) => {
  return jobs.filter((job) => {
    // Text-based search
    const matchesJobQuery =
      !jobQuery ||
      job.title?.toLowerCase().includes(jobQuery.toLowerCase()) ||
      job.company?.toLowerCase().includes(jobQuery.toLowerCase());

    const matchesLocation =
      !locationQuery ||
      job.city?.toLowerCase().includes(locationQuery.toLowerCase()) ||
      job.location?.toLowerCase().includes(locationQuery.toLowerCase());

    // Filters (salary, company, type, language, etc.)
    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true;

      if (key === "salary") {
        const jobSalary = (job.salaryRs || job.salary || "").toLowerCase();
        return jobSalary.includes(value.toLowerCase());
      }

      if (key === "distance") {
        // Distance logic can be added here later
        return true;
      }

      if (key === "datePosted") {
        const daysMap = {
          "Last 24 hours": 1,
          "Last 3 days": 3,
          "Last week": 7,
          "Last month": 30,
        };
        const maxDays = daysMap[value] || 999;
        return !job.postedDaysAgo || job.postedDaysAgo <= maxDays;
      }

      // Generic match
      const jobValue = job[key]?.toLowerCase?.() || "";
      return jobValue.includes(value.toLowerCase());
    });

    return matchesJobQuery && matchesLocation && matchesFilters;
  });
};

export default filterJobs;
