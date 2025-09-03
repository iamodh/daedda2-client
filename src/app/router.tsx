import { paths } from '@/config/paths';
import { createBrowserRouter, RouterProvider } from 'react-router';

// 레이아웃 래퍼 컴포넌트들
import MainLayoutWrapper from '@/components/layouts/main-layout-wrapper';
import FormLayoutWrapper from '@/components/layouts/form-layout-wrapper';

import { lazy } from 'react';
import { ProtectedRoute } from '@/app/routes/auth/protected';

const Landing = lazy(() => import('./routes/landing'));

const Login = lazy(() => import('./routes/auth/login'));
const Register = lazy(() => import('./routes/auth/register'));

const Root = lazy(() => import('./routes/app/root'));

const JobPosts = lazy(() => import('./routes/app/job-posts/index'));
const JobPost = lazy(() => import('./routes/app/job-posts/[id]/index'));
const History = lazy(() => import('./routes/app/history/index'));
const Profile = lazy(() => import('./routes/app/profile/index'));
const NewJobPost = lazy(() => import('./routes/app/job-posts/new'));
const EditJobPost = lazy(() => import('./routes/app/job-posts/[id]/edit'));
export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      element: <Landing />,
    },

    {
      path: paths.auth.login.path,
      element: <Login />,
    },
    {
      path: paths.auth.register.path,
      element: <Register />,
    },

    {
      path: paths.app.root.path,
      element: (
        // <ProtectedRoute>
        <Root />
        // </ProtectedRoute>
      ),
      children: [
        {
          element: <MainLayoutWrapper />,
          children: [
            {
              path: paths.app.jobPosts.path,
              element: <JobPosts />,
            },
            {
              path: paths.app.jobPost.path,
              element: <JobPost />,
            },
            { path: paths.app.history.path, element: <History /> },
            { path: paths.app.profile.path, element: <Profile /> },
          ],
        },
        {
          element: <FormLayoutWrapper />,
          children: [
            {
              path: paths.app.newJobPost.path,
              element: <NewJobPost />,
            },

            {
              path: paths.app.eidtJobPost.path,
              element: <EditJobPost />,
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
