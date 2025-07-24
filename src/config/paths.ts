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
    newJobPost: {
      path: 'job-posts/new',
      getHref: () => '/app/job-posts/new',
      title: '구인글 생성',
    },
    jobPost: {
      path: 'job-posts/:jobPostId',
      getHref: (id: number) => `/app/job-posts/${id}`,
    },
    eidtJobPost: {
      path: 'job-posts/:jobPostId/edit',
      getHref: (id: number) => `/app/job-posts/${id}/edit`,
      title: '구인글 수정',
    },
  },
};
