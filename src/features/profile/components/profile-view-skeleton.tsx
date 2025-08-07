export const ProfileViewSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 animate-pulse">
      <span className="text-xl w-1/3 h-7 bg-slate-200 rounded-lg" />

      <div className="flex flex-col items-center">
        <div className="size-24 rounded-full bg-slate-200" />
      </div>
      <div className="w-full flex flex-col gap-4 *:rounded-lg">
        <div className="h-[60px] bg-slate-200" />
        <div className="h-[60px] bg-slate-200" />
        <div className="h-[60px] bg-slate-200" />
      </div>
    </div>
  );
};
