import Job from "../types/job";

interface JobVacancyProps {
  job: Job;
  onFilterAdd: (filter: string) => void;
}

export default function JobVacancy({ job, onFilterAdd }: JobVacancyProps) {
  return (
    <article
      className={`${
        job.featured ? "border-l-[5px] border-l-dark-cyan" : ""
      } flex flex-col items-start gap-5 rounded-md bg-white px-5 pb-6 shadow-[0px_10px_15px_0px_rgba(91,164,164,.4)] mobile:flex-row mobile:items-center mobile:px-9 mobile:py-7`}
    >
      <img
        className="-mt-6 w-12 mobile:m-0 mobile:w-auto"
        src={job.logo}
        alt=""
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="mr-2 text-[17px] font-bold text-dark-cyan">
            {job.company}
          </span>
          {job.new && (
            <span className="rounded-full bg-dark-cyan px-2 py-1 text-sm font-bold uppercase leading-none text-white">
              new!
            </span>
          )}
          {job.featured && (
            <span className="rounded-full bg-[#2c3a3a] px-2 py-1 text-sm font-bold uppercase leading-none text-white">
              featured
            </span>
          )}
        </div>
        <h3 className="cursor-pointer text-[17px] font-bold text-very-dark-grayish-cyan transition hover:text-dark-cyan mobile:text-[22px]">
          {job.position}
        </h3>
        <div className="flex items-center gap-3">
          <span className="job-detail">{job.postedAt}</span>
          <span className="job-detail">{"\u2022"}</span>
          <span className="job-detail">{job.contract}</span>
          <span className="job-detail">{"\u2022"}</span>
          <span className="job-detail">{job.location}</span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-dark-grayish-cyan mobile:hidden"></div>

      <div className="flex flex-1 flex-wrap justify-start gap-4 mobile:justify-end">
        <button onClick={() => onFilterAdd(job.role)} className="filter-button">
          {job.role}
        </button>
        <button
          onClick={() => onFilterAdd(job.level)}
          className="filter-button"
        >
          {job.level}
        </button>
        {job.languages.map((lang, i) => (
          <button
            onClick={() => onFilterAdd(lang)}
            key={i}
            className="filter-button"
          >
            {lang}
          </button>
        ))}
        {job.tools.map((tool, i) => (
          <button
            onClick={() => onFilterAdd(tool)}
            key={i}
            className="filter-button"
          >
            {tool}
          </button>
        ))}
      </div>
    </article>
  );
}
