import { AppProvider } from '@/app/provider';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

export const waitForLoadingToFinish = () => {
  return waitForElementToBeRemoved(() => [
    ...screen.queryAllByTestId(/loading/i),
  ]);
};

export const renderApp = (
  ui: React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { url = '/', path = '/' }: Record<string, any> = {}
) => {
  const router = createMemoryRouter(
    [
      {
        path: path,
        element: ui,
      },
    ],
    // 히스토리 스택
    {
      initialEntries: url ? ['/', url] : ['/'],
      initialIndex: url ? 1 : 0,
    }
  );

  const returnValue = {
    ...render(ui, {
      wrapper: () => {
        return (
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        );
      },
    }),
  };

  return returnValue;
};
