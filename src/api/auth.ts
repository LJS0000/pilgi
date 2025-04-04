import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider, githubProvider } from '@services/firebase'

export const loginWithGoogle = async () => {
  try {
    const resp = await signInWithPopup(auth, googleProvider)
    return resp.user
  } catch (error) {
    console.error('Google 로그인 실패', error)
    throw error
  }
}

export const loginWithGithub = async () => {
  try {
    const resp = await signInWithPopup(auth, githubProvider)
    return resp.user
  } catch (error) {
    console.error('GitHub 로그인 실패', error)
    throw error
  }
}

export const logout = async () => {
  await signOut(auth)
}
