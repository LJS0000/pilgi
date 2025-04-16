'use client';

import { useCurrentUser } from '@hooks/useAuth';

const HomePage = () => {
  const { data: user } = useCurrentUser();

  console.log('user', user);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
