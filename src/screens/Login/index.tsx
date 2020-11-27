import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import colors from '../../theme/colors';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableOpacity onPress={handleGoBack} style={styles.backButtonWrapper}>
        <Icon name="arrow-back" size={30} color={colors.textPrimary} />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome back!</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.googleButton}>
        <Text style={styles.googleButtonLabel}>CONTINUE WITH GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
