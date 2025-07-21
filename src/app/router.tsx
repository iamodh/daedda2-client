import JobPostRoute from '@/app/routes/app/job-posts/job-post';
import JobPostNewRoute from '@/app/routes/app/job-posts/job-post-new';
import JobPostsRoute from '@/app/routes/app/job-posts/job-posts';
import AppRoot from '@/app/routes/app/root';
import LandingRoute from '@/app/routes/landing';
import { paths } from '@/config/paths';
import { createBrowserRouter, RouterProvider } from 'react-router';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <LandingRoute />,
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      children: [
        {
          path: paths.app.jobPosts.path,
          element: <JobPostsRoute />,
        },
        {
          path: paths.app.jobPostNew.path,
          element: <JobPostNewRoute />,
        },
        {
          path: paths.app.jobPost.path,
          element: <JobPostRoute />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
