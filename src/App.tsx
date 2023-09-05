import { useState, useEffect } from "react";

import Header from "./components/Header";
import FilterList from "./components/FilterList";
import JobsListing from "./components/JobsListing";

import data from "./data/data.json";
import Job from "./types/job";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  useEffect(() => {
    if (filters.length === 0) {
      return setFilteredJobs(jobs);
    }

    setFilteredJobs(
      jobs.filter((job) => {
        const tags = [job.role, job.level, ...job.languages, ...job.tools];
        return filters.every((filter) => tags.includes(filter));
      })
    );
  }, [filters, jobs]);

  // Добавить фильтр
  const handleFilterAdded = (filterToAdd: string) => {
    if (!filters.includes(filterToAdd)) {
      setFilters([...filters, filterToAdd]);
    }
  };

  // Удалить все фильтры
  const handleFiltersCleared = () => {
    setFilters([]);
  };

  // Удалить 1 фильтр
  const handleFilterRemoved = (filterToRemove: string) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  return (
    <>
      <Header />
      <FilterList
        filters={filters}
        onFiltersClear={handleFiltersCleared}
        onFilterRemove={handleFilterRemoved}
      />
      <JobsListing jobs={filteredJobs} onFilterAdd={handleFilterAdded} />
    </>
  );
}

export default App;
