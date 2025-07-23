export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    // posts를 root 라우트로 사용
    jobPosts: {
      path: 'job-posts',
      getHref: () => '/app/job-posts',
    },
    jobPostNew: {
      path: 'job-posts/create',
      getHref: () => '/app/job-posts/create',
    },
    jobPost: {
      path: 'job-posts/:jobPostId',
      getHref: (id: string) => `/app/job-posts/${id}`,
    },
  },
};
