import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
}

const Button = ({label, onPress, ...props}: Props) => {
  return (
    <TouchableOpacity {...props} style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
