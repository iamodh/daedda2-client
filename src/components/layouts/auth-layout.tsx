export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-[640px] mx-auto">
        <main className="px-4">{children}</main>
      </div>
    </>
  );
};
