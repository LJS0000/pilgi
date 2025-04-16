import { GoogleAuthProvider, GithubAuthProvider, AuthProvider, AuthError } from 'firebase/auth';

export const providerFactory = {
  'google.com': {
    provider: new GoogleAuthProvider(),
    getCredential: (error: AuthError) => GoogleAuthProvider.credentialFromError(error),
  },
  'github.com': {
    provider: new GithubAuthProvider(),
    getCredential: (error: AuthError) => GithubAuthProvider.credentialFromError(error),
  },
} satisfies Record<
  string,
  {
    provider: AuthProvider;
    getCredential: (error: AuthError) => ReturnType<typeof GoogleAuthProvider.credentialFromError>;
  }
>;
