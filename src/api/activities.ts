import firestore from '@react-native-firebase/firestore';

export const saveScan = async (name: string, userId: string) => {
  const scanRef = await firestore().collection('activities').add({
    type: 'scan',
    name,
    createdAt: new Date(),
    userId,
    points: 10,
  });

  const scanDoc = await scanRef.get();
  console.log(scanDoc);

  return {...scanDoc.data(), id: scanDoc.id};
};

export const getActivities = async (userId: string) => {
  const activitiesRef = await firestore()
    .collection('activities')
    .where('userId', '==', userId);
  const snapshot = await activitiesRef.get();

  let activities: any[] = [];

  snapshot.forEach((doc) => activities.push({...doc.data(), id: doc.id}));

  return activities;
};
