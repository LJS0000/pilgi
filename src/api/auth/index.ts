import { signInWithPopup, signOut, onAuthStateChanged, User, AuthError } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '@services/firebase';
import { handleCredentialConflict } from './handleCredentialConflict';

export const loginWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(auth, googleProvider);
    return resp.user;
  } catch (err) {
    return handleCredentialConflict(err as AuthError, auth);
  }
};

export const loginWithGithub = async () => {
  try {
    const resp = await signInWithPopup(auth, githubProvider);
    return resp.user;
  } catch (err) {
    return handleCredentialConflict(err as AuthError, auth);
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
    throw err;
  }
};
