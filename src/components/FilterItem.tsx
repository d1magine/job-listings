interface FilterItemProps {
  filter: string;
  onFilterRemove: (filter: string) => void;
}

export default function FilterItem({
  filter,
  onFilterRemove,
}: FilterItemProps) {
  return (
    <div className="flex overflow-hidden rounded">
      <span className="bg-light-grayish-cyan px-2 py-4 font-bold leading-[0px] text-dark-cyan transition">
        {filter}
      </span>
      <button
        onClick={() => onFilterRemove(filter)}
        className="bg-dark-cyan px-2 transition hover:bg-very-dark-grayish-cyan"
      >
        <img src="/images/icon-remove.svg" alt="" />
      </button>
    </div>
  );
}
