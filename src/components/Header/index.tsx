import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View, Image } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface Props {

}

const Header = ({}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftContainer}>
        <Icon name={'menu'} size={18} />
        <Text style={styles.points}>400 points</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'md-camera-outline'} size={24} />
        <Image source={require('../../images/kacper.jpg')} style={styles.avatar} />
      </View>
    </View>
  );
};

export default Header;
