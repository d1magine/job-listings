import JobVacancy from "./JobVacancy";

import Job from "../types/job";

interface JobsListingProps {
  jobs: Job[];
  onFilterAdd: (filter: string) => void;
}

export default function JobsListing({ jobs, onFilterAdd }: JobsListingProps) {
  return (
    <main className="my-container my-11 flex flex-col gap-10 mobile:gap-6">
      {jobs.map((job) => (
        <JobVacancy key={job.id} job={job} onFilterAdd={onFilterAdd} />
      ))}
    </main>
  );
}
