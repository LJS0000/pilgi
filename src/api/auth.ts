import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '@services/firebase';
import { queryClient } from '@services/queryClient';

export const loginWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(auth, googleProvider);
    return resp.user;
  } catch (error) {
    console.error('Google 로그인 실패', error);
    throw error;
  }
};

export const loginWithGithub = async () => {
  try {
    const resp = await signInWithPopup(auth, githubProvider);
    return resp.user;
  } catch (error) {
    console.error('GitHub 로그인 실패', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    queryClient.removeQueries({ queryKey: ['currentUser'] });
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};
