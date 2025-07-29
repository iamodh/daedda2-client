const JobPostListsSkeleton = () => {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <li
          className="flex items-center justify-between py-3 px-4 shadow-custom rounded-lg gap-4 animate-pulse"
          key={idx}
        >
          <div className="flex flex-col gap-0.5 flex-grow *:rounded-sm *:bg-slate-200">
            <div className="w-4/5 md:h-7 h-6" />
            <div className="w-2/5 md:h-5 h-4" />
            <div className="w-4/5 md:h-7 h-6" />
            <div className="w-3/5 md:h-5 h-4 " />
          </div>
          <div className="bg-slate-200 rounded-lg md:size-28 size-26 shrink-0" />
        </li>
      ))}
    </ul>
  );
};

export { JobPostListsSkeleton };
