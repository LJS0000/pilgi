'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import { loginWithGoogle, loginWithGithub, logout, getCurrentUser } from '@api/auth';
import { queryClient } from '@services/queryClient';

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};

export const useGithubLogin = () => {
  return useMutation({
    mutationFn: loginWithGithub,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['currentUser'] });
    },
  });
};
