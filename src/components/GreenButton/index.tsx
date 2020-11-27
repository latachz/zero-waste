import React from 'react';
import { Button } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import styles from './styles';

interface Props {
  label: string;
}

const GreenButton = ({ label }: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default GreenButton;
