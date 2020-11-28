import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  currentUser: any;
}

const Header = ({currentUser}: Props) => {
  const navigation = useNavigation();
  console.log(currentUser);
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftContainer}>
        <Icon name={'menu'} size={18} />
        <Text style={styles.points}>400 points</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
          <Ionicons name={'md-camera-outline'} size={24} />
        </TouchableOpacity>
        <Image
          source={
            currentUser.photoUrl
              ? {uri: currentUser.photoUrl}
              : require('../../images/avatar.png')
          }
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

export default Header;
