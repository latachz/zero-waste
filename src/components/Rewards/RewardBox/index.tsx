import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View, ScrollView, Image } from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  isDisabled?: boolean;
}

const RewardBox = ({ isDisabled }: Props) => {
  return (
    <View style={styles.box}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>50%</Text>
      </View>
      <Text style={styles.info}>50% discount</Text>
      <TouchableOpacity disabled={isDisabled} style={[styles.button, isDisabled ? styles.button : styles.buttonActive]}>
        <Text style={[styles.buttonLabel, isDisabled ? styles.buttonLabel : styles.buttonActiveLabel]}>
          {isDisabled ? '400/1000' : 'RECEIVE'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RewardBox;
