import { useState, useEffect } from 'react';
import { 
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../lib/firebase';

export function useAuth() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Check for redirect result when the component mounts
    getRedirectResult(auth).catch((err) => {
      setError('Failed to complete authentication');
      console.error(err);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      setError(null);
      await signInWithRedirect(auth, googleProvider);
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      setError(null);
      await signInWithRedirect(auth, facebookProvider);
    } catch (err) {
      setError('Failed to sign in with Facebook');
      console.error(err);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      setError('Failed to sign out');
      console.error(err);
    }
  };

  return {
    user,
    loading,
    error,
    signInWithGoogle,
    signInWithFacebook,
    signOut
  };
}