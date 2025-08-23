import { it } from 'vitest';
import JobPostsRoute from '@/app/routes/app/job-posts';
import { renderApp } from '@/testing/test-utils';

it('JobPostsRoute가 렌더링된다(스모크)', () => {
  renderApp(<JobPostsRoute />);
});
