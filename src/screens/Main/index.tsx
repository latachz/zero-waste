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
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../theme/colors';

const Main: React.FC = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const navigation = useNavigation();
  const currentUser = useSelector((store: any) => store.global.currentUser);
  const breakpoint = 3;

  const [currentActivities, setCurrentActivities] = useState<any>()

  const fetchActivities = async () => {
    const res = await getActivities(currentUser.id);
    setActivities(res);
    setCurrentActivities(res.slice(0, breakpoint))
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const showMore = () => {
    setCurrentActivities([...currentActivities, ...activities.slice(breakpoint, activities.length)]);
  }

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
        {currentActivities && 
          <Activities activities={currentActivities} />
        }
        
        {currentActivities && currentActivities.length !== activities.length && 
          <TouchableOpacity onPress={showMore} style={{ marginTop: -5, marginBottom: 10 }}><Text style={{ textAlign: 'center', color: colors.gray }}>Show more</Text></TouchableOpacity>
        }
        
      </ScrollView>
    </View>
  );
};

export default Main;
