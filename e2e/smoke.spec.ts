import test, { expect } from 'playwright/test';

test('smoke', async ({ page }) => {
  const jobPost = {
    title: '게시글 작성 테스트',
    location: '경남 김해시 대청동',
    pay: 100000,
    date: new Date(),
    startTime: '10:00',
    endTime: '20:00',
    totalHours: 10,
    place: '우리집',
    imageUrl: null,
    content: '방청소 부탁드려요.',
    hourlyWage: 10000,
  };

  // 게시글 작성
  await page.goto('/app/job-posts');
  await page.getByRole('button', { name: '구인글 작성' }).click();

  await page.waitForURL('/app/job-posts/new');
  await page.getByLabel('제목').fill(jobPost.title);
  await page.getByLabel('가게 이름').fill(jobPost.place);
  await page
    .getByLabel('근무 날짜')
    .fill(jobPost.date.toISOString().slice(0, 10));
  await page.getByLabel('시작 시간').fill(jobPost.startTime);
  await page.getByLabel('마치는 시간').fill(jobPost.endTime);
  await page.getByLabel('일당').fill(String(jobPost.pay));
  await page.getByLabel('근무 내용').fill(jobPost.content);

  await page.getByRole('button', { name: '등록' }).click();

  // 게시글 상세 페이지로 이동
  await page.waitForURL(/\/job-posts\/\d+$/);
  await expect(page.getByText(jobPost.title)).toBeVisible();

  // 게시글 수정
  await page.getByRole('button', { name: '수정' }).click();
  await page.getByLabel('제목').fill('게시글 수정 테스트');
  await page.getByRole('button', { name: '수정' }).click();
  await page.waitForURL(/\/job-posts\/\d+$/);
  await expect(page.getByText('게시글 수정 테스트')).toBeVisible();

  // 게시글 삭제
  await page.getByRole('button', { name: '삭제' }).click();
  await page.waitForURL('app/job-posts');
});
