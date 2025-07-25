import { paths } from '@/config/paths';
import { createBrowserRouter, RouterProvider } from 'react-router';

// 페이지 컴포넌트들
import JobPostRoute from '@/app/routes/app/job-posts/[id]';
import JobPostsRoute from '@/app/routes/app/job-posts';
import LandingRoute from '@/app/routes/landing';
import NewJobPostRoute from '@/app/routes/app/job-posts/new';
import EditJobPostRoute from '@/app/routes/app/job-posts/[id]/edit';

// 레이아웃 래퍼 컴포넌트들
import MainLayoutWrapper from '@/components/layouts/main-layout-wrapper';
import FormLayoutWrapper from '@/components/layouts/form-layout-wrapper';
import AppRoot from '@/app/routes/app/root';
import HistoryRoute from '@/app/routes/app/history';
import ProfileRoute from '@/app/routes/app/profile';

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
          element: <MainLayoutWrapper />,
          children: [
            {
              path: paths.app.jobPosts.path,
              element: <JobPostsRoute />,
            },
            {
              path: paths.app.jobPost.path,
              element: <JobPostRoute />,
            },
            { path: paths.app.history.path, element: <HistoryRoute /> },
            { path: paths.app.profile.path, element: <ProfileRoute /> },
          ],
        },
        {
          element: <FormLayoutWrapper />,
          children: [
            {
              path: paths.app.newJobPost.path,
              element: <NewJobPostRoute />,
            },

            {
              path: paths.app.eidtJobPost.path,
              element: <EditJobPostRoute />,
            },
          ],
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
