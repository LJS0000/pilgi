'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@components/ui';
import { useCurrentUser } from '@hooks/useAuth';
import { useGoogleLogin, useGithubLogin } from '@hooks/useAuth';

const LoginPage = () => {
  const router = useRouter();

  const { data: user } = useCurrentUser();
  const { mutateAsync: googleLogin } = useGoogleLogin();
  const { mutateAsync: githubLogin } = useGithubLogin();

  const handleLogin = async (provider: 'google' | 'github') => {
    try {
      if (provider === 'google') await googleLogin();
      if (provider === 'github') await githubLogin();
      router.replace('/');
    } catch (err) {
      console.error('로그인 실패:', err);
      alert('로그인 실패!');
    }
  };

  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  return (
    <div>
      <h1>회원가입</h1>
      <Button onClick={() => handleLogin('google')}>Google 로그인</Button>
      <Button onClick={() => handleLogin('github')}>GitHub 로그인</Button>
    </div>
  );
};

export default LoginPage;
