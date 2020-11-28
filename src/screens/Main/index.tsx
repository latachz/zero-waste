import React from 'react';
import {View, ScrollView, Text, StatusBar, ImageBackground} from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Rewards from '../../components/Rewards';
import SectionTitle from '../../components/SectionTitle';
import Statistics from '../../components/Statistics';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
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
