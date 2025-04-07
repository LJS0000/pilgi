'use client';

import { LogoutButton } from '@components/feature';
import { useCurrentUser } from '@hooks/useAuth';

const HomePage = () => {
  const { data: user } = useCurrentUser();

  console.log('user', user);

  return (
    <div>
      <h1 className="bg-yellow-200 text-red-500 p-48">Home Page</h1>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
