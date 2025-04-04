'use client';

import LogoutButton from '@components/feature/auth/LogoutButton';
import { useCurrentUser } from '@hooks/useCurrentUser';

const HomePage = () => {
  const { data: user } = useCurrentUser();

  console.log('user', user);

  return (
    <div>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
