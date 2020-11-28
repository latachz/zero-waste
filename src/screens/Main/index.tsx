import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StatusBar, ImageBackground} from 'react-native';

import Header from '../../components/Header';
import Rewards from '../../components/Rewards';
import SectionTitle from '../../components/SectionTitle';
import Statistics from '../../components/Statistics';
import Activities from '../../components/Activities';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {getActivities} from '../../api/activities';

const Main: React.FC = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const navigation = useNavigation();
  const currentUser = useSelector((store: any) => store.global.currentUser);

  const fetchActivities = async () => {
    const res = await getActivities(currentUser.id);
    setActivities(res);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header currentUser={currentUser} />
      <ScrollView>
        <SectionTitle>Rewards</SectionTitle>
        <Rewards />
        <SectionTitle>Your progress</SectionTitle>
        <Statistics />
        <SectionTitle>Recent activity</SectionTitle>
        <Activities activities={activities} />
      </ScrollView>
    </View>
  );
};

export default Main;
