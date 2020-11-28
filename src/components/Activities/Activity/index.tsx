import React from 'react';
import { View, Text } from 'react-native';
//@ts-ignore
import Logo from '../../../images/recycle-white.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { color } from 'react-native-reanimated';

interface Props {
  title: string;
  points: number;
  time: string;
}

const Activity = ({ title, points, time }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftContainer}>
        <View style={styles.iconBackground}>
          <Logo width={20} height={20} />
        </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
    <Text style={styles.points}>+{points}p</Text>
    </View>
  );
};

export default Activity;
