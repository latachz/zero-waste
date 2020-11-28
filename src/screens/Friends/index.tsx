import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontiso from 'react-native-vector-icons/Fontisto';
import colors from '../../theme/colors';

import FriendsList from '../../components/FriendsList';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { getUsers, getUsersByQuery } from '../../api/users';

const Friends: React.FC = () => {
  const navigation = useNavigation();
  
  const [users, setUsers] = useState<any>([]);
  const [query, setQuery] = useState<string>();

  const loadData = async () =>{
    try{
      let res = await getUsers();
      setUsers(res);
    } catch(err) {
      return err;
    }
  }

  if (users.length === 0) {
    loadData()
  }

  const searchFriends = async () => {
    let res = await getUsersByQuery(query);
    setUsers(res);
  }

  useEffect(() => {
    if(query) {
      searchFriends();
    }
  }, [query])


  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
          <TouchableOpacity onPress={() => console.log("press")} style={styles.arrowWrapper}>
            <Icon name="arrow-back" size={30} color={colors.lightGray} />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Fontiso name={"zoom"} size={20} color={colors.lightGray} style={{ marginLeft: 15 }} />
            <TextInput style={styles.input} placeholder={'Search friends'} onChangeText={t => setQuery(t)} value={query} />
          </View>
      </View>
      {users && (
        <FriendsList users={users} />
      )}
    </View>
  );
};

export default Friends;
