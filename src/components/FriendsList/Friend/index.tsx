import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';


interface Props {
  displayName: string;
  photoUrl?: string;
}

const Friend = ({ displayName, photoUrl }: Props) => {
  return (
    <View style={styles.box}>
      <View style={styles.leftContainer}>
        <Image
          source={photoUrl ? {uri: photoUrl } : require('../../../images/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{displayName}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonLabel}>Add</Text></TouchableOpacity>
    </View>
  );
};

export default Friend;
