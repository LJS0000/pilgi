'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCurrentUser } from '@hooks/useCurrentUser';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [user, isLoading, router]);

  // TODO: 로딩화면 만들기
  if (isLoading) return null;

  return <>{children}</>;
};

export default RequireAuth;
