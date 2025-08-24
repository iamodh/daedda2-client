import test from 'playwright/test';

const auth_file = 'e2e/.auth/user.json';

test('authenticate', async ({ page }) => {
  const user = {
    username: 'user1234',
    password: 'password',
    password2: 'password',
    phone: '010-0000-0000',
    email: 'test@test.com',
    nickname: 'testuser',
    imageUrl: null,
  };

  // alert 무력화
  await page.addInitScript(() => {
    window.alert = () => {};
  });

  // 로그인 -> 회원가입 화면으로 이동
  await page.goto('/auth/login');
  await page.getByRole('link', { name: /회원가입/ }).click();

  // 회원가입
  await page.getByLabel('아이디').fill(user.username);
  await page.getByLabel('비밀번호', { exact: true }).fill(user.password);
  await page.getByLabel('비밀번호 확인', { exact: true }).fill(user.password2);
  await page.getByLabel('닉네임').fill(user.nickname);
  await page.getByLabel('전화번호').fill(user.phone);
  await page.getByLabel('이메일').fill(user.email);
  await page.getByRole('button', { name: '회원가입' }).click();

  // 앱 진입 확인
  await page.waitForURL('/app/job-posts');

  // 로그아웃
  await page.goto('/app/profile');
  await page.getByRole('button', { name: '로그아웃' }).click();

  // 로그아웃 확인
  await page.waitForURL('/auth/login');

  // 다시 로그인
  await page.getByPlaceholder('아이디').fill(user.username);
  await page.getByPlaceholder('비밀번호').fill(user.password);
  await page.getByRole('button', { name: '로그인', exact: true }).click();

  // 앱 재진입 확인
  await page.waitForURL('/app/job-posts');

  // 현재 브라우저 컨텍스트의 스토리지 저장
  await page.context().storageState({ path: auth_file });
});
