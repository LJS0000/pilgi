'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@components/ui/Button';
import { useCurrentUser } from '@hooks/useCurrentUser';
import { loginWithGoogle, loginWithGithub } from '@api/auth';

const LoginPage = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  const handleLogin = async (provider: 'google' | 'github') => {
    try {
      await (provider === 'google' ? loginWithGoogle() : loginWithGithub());
      router.push('/');
    } catch (err) {
      // TODO: 에러 핸들링
      console.error('로그인 실패:', err);
      alert('로그인 실패!');
    }
  };

  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  return (
    <div>
      <h1>로그인</h1>
      <Button onClick={() => handleLogin('google')}>Google 로그인</Button>
      <Button onClick={() => handleLogin('github')}>GitHub 로그인</Button>
    </div>
  );
};

export default LoginPage;
