import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';

const Login: React.FC = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.title}>Login</Text>
      <Icon name="arrow-back" size={30} color={colors.textPrimary} />
    </View>
  );
};

export default Login;
