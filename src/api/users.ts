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

export const getUsers = async () => {
  const usersRef = await firestore().collection('users');

  const snapshot = await usersRef.get();

  let users: any[] = [];

  snapshot.forEach((doc) => users.push({...doc.data(), id: doc.id}));

  return users;
}
