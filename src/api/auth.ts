import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '@services/firebase';

export const loginWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(auth, googleProvider);
    return resp.user;
  } catch (err) {
    console.error('Google 로그인 실패', err);
    throw err;
  }
};

export const loginWithGithub = async () => {
  try {
    const resp = await signInWithPopup(auth, githubProvider);
    return resp.user;
  } catch (err) {
    console.error('GitHub 로그인 실패', err);
    throw err;
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  return new Promise(resolve => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      resolve(user ?? null);
      unsubscribe();
    });
  });
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error('로그아웃 실패:', err);
  }
};
