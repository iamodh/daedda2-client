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
          path: paths.app.posts.path,
          element: <JobPostsRoute />,
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
