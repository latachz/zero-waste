import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
//@ts-ignore
import { Bar } from 'react-native-progress';
//@ts-ignore
import Logo from '../../images/recycle.svg';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import SectionTitle from '../../components/SectionTitle';
import Nav from '../../components/Nav';
import Activities from '../../components/Activities';

const Competitions: React.FC = () => {
  const navigation = useNavigation();

  const progress = 0.4;

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ImageBackground
        source={require('../../images/map.png')}
        style={{ width: '100%' }}
      >
        <View style={styles.head}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButtonWrapper}>
            <Icon name="arrow-back" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <View style={styles.time}>
            <Text style={styles.timeText}>{'3 days left'.toUpperCase()}</Text>
          </View>
        </View>
      </ImageBackground>

      <Nav />
      <View style={styles.body}>
        <SectionTitle>Target</SectionTitle>
        <View style={styles.progressBar}>
          <View style={{ marginHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.progressBarText}>{progress * 100}/100 collected</Text>
              <Text style={[styles.progressBarText, { marginRight: 10 }]}>{progress * 100}%</Text>
            </View>
            <Bar progress={progress} width={360} color={colors.green} />
          </View>
        </View>
        <SectionTitle>Participants activity</SectionTitle>
        <Activities />
      </View>


    </View>
  );
};

export default Competitions;
