'use client';

import { useRouter } from 'next/navigation';
import Button from '@components/ui/Button';
import { logout } from '@api/auth';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
};

export default LogoutButton;
