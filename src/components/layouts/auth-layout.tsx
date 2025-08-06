export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-[640px] mx-auto py-10 min-h-screen flex justify-center items-center">
        <main className="px-4 w-full">{children}</main>
      </div>
    </>
  );
};
