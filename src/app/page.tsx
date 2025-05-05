'use client';

import { LogoutButton } from '@components/feature';
import { useCurrentUser } from '@hooks/useAuth';

const HomePage = () => {
  const { data: user } = useCurrentUser();

  console.log('user', user);

  return (
    <div>
      <h1>Home</h1>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
