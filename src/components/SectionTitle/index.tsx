import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import styles from './styles';

interface Props {
  children: string;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <Text style={styles.title}>{children.toUpperCase()}</Text>
  );
};

export default SectionTitle;
