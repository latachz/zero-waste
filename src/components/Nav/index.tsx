import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import NavElement from './NavElement';

interface Props {
  data?: Array<{
    
  }>
}

const Nav = ({}: Props) => {
  
  return (
    <View style={styles.navWrapper}>
      <View style={styles.nav}>
        <NavElement label={'Activity'} isActive/>
        <NavElement label={'Participants'} />
        <NavElement label={'Details'} />
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default Nav;
