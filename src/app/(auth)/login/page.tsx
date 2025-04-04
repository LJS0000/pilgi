'use client';

import { useRouter } from 'next/navigation';
import Button from '@components/ui/Button';
import { loginWithGoogle, loginWithGithub } from '@api/auth';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (provider: 'google' | 'github') => {
    try {
      const user = provider === 'google' ? await loginWithGoogle() : await loginWithGithub();

      console.log('로그인 성공:', user);
      router.push('/');
    } catch (err) {
      console.error('로그인 실패:', err);
      alert('로그인 실패!');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <Button onClick={() => handleLogin('google')}>Google 로그인</Button>
      <Button onClick={() => handleLogin('github')}>GitHub 로그인</Button>
    </div>
  );
};

export default LoginPage;
