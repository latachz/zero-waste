import React from 'react';
import {View, ScrollView, Text, StatusBar, ImageBackground} from 'react-native';

import Header from '../../components/Header';
import Rewards from '../../components/Rewards';
import SectionTitle from '../../components/SectionTitle';
import Statistics from '../../components/Statistics';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const currentUser = useSelector((store: any) => store.global.currentUser);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header currentUser={currentUser} />
      <ScrollView>
        <SectionTitle>Rewards</SectionTitle>
        <Rewards />
        <SectionTitle>Your progress</SectionTitle>
        <Statistics />
      </ScrollView>
    </View>
  );
};

export default Main;
