import { Dividor } from '@/components/ui/form/dividor';

const JobPostViewSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <section className="flex flex-col gap-4">
        <header className="flex justify-between items-center gap-2">
          <div className="w-full h-7 bg-slate-200 rounded-sm" />
        </header>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 w-full">
            <div className="w-1/4 h-10 bg-slate-200 rounded-sm" />
          </div>
        </div>
      </section>
      <Dividor />
      <section className="flex flex-col gap-2">
        <div className="w-1/4 h-7 bg-slate-200 rounded-sm" />
        <div className="flex flex-col gap-2">
          <div className="w-1/2 h-6 bg-slate-200 rounded-sm" />
          <div className="w-1/2 h-6 bg-slate-200 rounded-sm" />
        </div>
      </section>
    </div>
  );
};

export { JobPostViewSkeleton };
