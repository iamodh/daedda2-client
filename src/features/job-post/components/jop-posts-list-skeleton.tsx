const JobPostListsSkeleton = () => {
  return (
    <ul>
      {Array.from({ length: 4 }).map((_, idx) => (
        <li key={idx}>Loading Job Post...</li>
      ))}
    </ul>
  );
};

export { JobPostListsSkeleton };
