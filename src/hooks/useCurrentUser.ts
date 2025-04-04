import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@api/auth';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
  });
};
