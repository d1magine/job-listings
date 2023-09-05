import FilterItem from "./FilterItem";

interface FilterListProps {
  filters: string[];
  onFiltersClear: () => void;
  onFilterRemove: (filter: string) => void;
}

export default function FilterList({
  filters,
  onFiltersClear,
  onFilterRemove,
}: FilterListProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div className="my-container">
      <div className="-mt-9 flex items-center gap-6 rounded-md bg-white px-9 py-6 shadow-[0px_10px_15px_0px_rgba(91,164,164,.4)]">
        <div className="flex flex-1 flex-wrap gap-4">
          {filters.map((filter, i) => (
            <FilterItem
              key={i}
              filter={filter}
              onFilterRemove={onFilterRemove}
            />
          ))}
        </div>
        <button
          onClick={onFiltersClear}
          className="font-bold text-dark-grayish-cyan hover:text-dark-cyan hover:underline"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
