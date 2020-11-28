import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Friend from './Friend'

interface Props {
  users: Array<{
    displayName: string;
    photoUrl: string;
  }>;
}

const FriendsList = ({ users }: Props) => {
  return (
    <ScrollView style={styles.wrapper}>
      {users.map((user, index) => (
        <Friend key={index} displayName={user.displayName} photoUrl={user.photoUrl} />
      ))}
    </ScrollView>
  );
};

export default FriendsList;
