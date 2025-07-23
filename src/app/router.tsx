import JobPostRoute from '@/app/routes/app/job-posts/[id]';
import JobPostsRoute from '@/app/routes/app/job-posts';
import AppRoot from '@/app/routes/app/root';
import LandingRoute from '@/app/routes/landing';
import { paths } from '@/config/paths';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NewJobPostRoute from '@/app/routes/app/job-posts/new';
import EditJobPostRoute from '@/app/routes/app/job-posts/[id]/edit';

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
          path: paths.app.newJobPost.path,
          element: <NewJobPostRoute />,
        },
        {
          path: paths.app.jobPost.path,
          element: <JobPostRoute />,
        },
        {
          path: paths.app.eidtJobPost.path,
          element: <EditJobPostRoute />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
