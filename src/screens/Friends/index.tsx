import React, { useState } from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

import FriendsList from '../../components/FriendsList';
import Input from '../../components/Input';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { getUsers } from '../../api/users';

const Friends: React.FC = () => {
  const navigation = useNavigation();
  
  // const [users, setUsers] = useState<any>();

  // const getData = async () => {
  //   const newData = await getUsers();
  //   setUsers(newData);
  // }
  // getUsers()

  const getData = async () => {
    const users = await getUsers();

    return users
  }

  const users = getData();

  console.log(users)
  

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
          <TouchableOpacity onPress={() => console.log("press")} style={styles.arrowWrapper}>
            <Icon name="arrow-back" size={30} color={colors.lightGray} />
          </TouchableOpacity>
          <Input style={{ width: '80%' }}placeholder={'Search friends'}/>
      </View>
      {/* <FriendsList users={users} /> */}
    </View>
  );
};

export default Friends;
