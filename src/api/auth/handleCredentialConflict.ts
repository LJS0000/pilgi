import {
  fetchSignInMethodsForEmail,
  linkWithCredential,
  signInWithPopup,
  Auth,
  AuthError,
} from 'firebase/auth';
import { providerFactory } from './providerFactory';

export const handleCredentialConflict = async (err: AuthError, auth: Auth) => {
  if (err.code !== 'auth/account-exists-with-different-credential') throw err;

  const email = err.customData?.email;
  const providerId = err.customData?._tokenResponse?.providerId;
  if (!email || !providerId) throw new Error('이메일 또는 providerId 없음');

  const factory = providerFactory[providerId];
  if (!factory) throw new Error(`지원하지 않는 provider: ${providerId}`);

  const pendingCred = factory.getCredential(err);
  if (!pendingCred) throw new Error('크리덴셜 생성 실패');

  const existingProviders = await fetchSignInMethodsForEmail(auth, email);
  console.log('1', existingProviders);
  if (existingProviders.length === 0) {
    throw new Error('기존 로그인 방법을 찾을 수 없습니다.');
  }

  const existingProviderId = existingProviders[0];
  const existingFactory = providerFactory[existingProviderId];
  if (!existingFactory) {
    throw new Error(`지원하지 않는 기존 provider: ${existingProviderId}`);
  }

  const existingResult = await signInWithPopup(auth, existingFactory.provider);
  await linkWithCredential(existingResult.user, pendingCred);

  return existingResult.user;
};
