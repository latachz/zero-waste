import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Logo from '../../images/recycle.svg';

import styles from './styles';
import colors from '../../theme/colors';

const Home: React.FC = () => {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Logo width={40} height={40} />
      <Text style={styles.title}>Save the planet</Text>
      <Text style={styles.description}>Save the planet</Text>
    </View>
  );
};

export default Home;
