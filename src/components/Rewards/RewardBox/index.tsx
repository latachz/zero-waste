import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View, ScrollView, Image } from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  isDisabled?: boolean;
  info: string;
}

const RewardBox = ({ isDisabled, info }: Props) => {
  return (
    <View style={styles.box}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>50%</Text>
      </View>
      <Text style={styles.info}>{info}</Text>
      <TouchableOpacity disabled={isDisabled} style={[styles.button, isDisabled ? styles.button : styles.buttonActive]}>
        <Text style={[styles.buttonLabel, isDisabled ? styles.buttonLabel : styles.buttonActiveLabel]}>
          {isDisabled ? '400/1000' : 'RECEIVE'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RewardBox;
