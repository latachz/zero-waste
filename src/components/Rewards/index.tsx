import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View, ScrollView, Image } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import RewardBox from './RewardBox';

interface Props {
  data?: Array<{
    
  }>
}

const Rewards = ({}: Props) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <RewardBox isDisabled />
      <RewardBox isDisabled />
      <RewardBox isDisabled />
      <RewardBox />
    </ScrollView>
  );
};

export default Rewards;
