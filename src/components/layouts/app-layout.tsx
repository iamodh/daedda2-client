export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>App Layout</h1>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};
