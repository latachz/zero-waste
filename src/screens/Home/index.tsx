import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/images/recycle.svg';

import styles from './styles';
import colors from '../../theme/colors';

const Login: React.FC = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Logo />
      <Text style={styles.title}>Save the planet</Text>
      <Text style={styles.description}>Save the planet</Text>
    </View>
  );
};

export default Login;
