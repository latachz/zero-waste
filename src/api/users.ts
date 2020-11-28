import {auth} from './firebase';
import firestore from '@react-native-firebase/firestore';

export const signIn = async (email: string, password: string) => {
  const user = await auth.signInWithEmailAndPassword(email, password);
  if (!user) return;

  const currentUser = await getCurrentUser(user.user!.uid);
  return currentUser;
};

export const getCurrentUser = async (id: string) => {
  const userRef = await firestore().collection('users').doc(id);

  const user = await userRef.get();

  return {...user.data(), id: user.id};
};
