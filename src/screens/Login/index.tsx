import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {loginUser} from '../../actions/users';
import Input from '../../components/Input';
import styles from './styles';
import colors from '../../theme/colors';

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleGoBack = () => navigation.goBack();

  const handleLogin = async () => {
    dispatch(loginUser(form.email, form.password));
  };

  const handleChange = (fieldName: string, value: string) =>
    setForm({...form, [fieldName]: value});

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableOpacity onPress={handleGoBack} style={styles.backButtonWrapper}>
        <Icon name="arrow-back" size={30} color={colors.textPrimary} />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome back!</Text>
      <Input
        placeholder="Email"
        onChangeText={(value) => handleChange('email', value)}
      />
      <Input
        placeholder="Password"
        onChangeText={(value) => handleChange('password', value)}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.googleButton}>
        <Text style={styles.googleButtonLabel}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
