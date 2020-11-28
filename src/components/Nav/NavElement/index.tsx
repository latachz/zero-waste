import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';


interface Props {
  isActive?: boolean;
  label: string;
}

const NavElement = ({ isActive, label }: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log('go back')}>
      <Text style={[styles.navElement, isActive ? styles.navElementActive : styles.navElement]}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default NavElement;
