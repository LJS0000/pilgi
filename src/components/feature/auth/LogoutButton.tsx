'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@components/ui';
import { useLogout } from '@hooks/useAuth';

const LogoutButton = () => {
  const router = useRouter();

  const { mutateAsync: logout } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (err) {
      // TODO: 에러 핸들링
      console.error('로그아웃 실패:', err);
    }
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
};

export default LogoutButton;
