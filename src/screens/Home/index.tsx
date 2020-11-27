import React from 'react';
import {View, Text, StatusBar, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Logo from '../../images/recycle.svg';
import GreenButton from '../../components/GreenButton'

import styles from './styles';
import colors from '../../theme/colors';

const Home: React.FC = () => {
  return (
    <View style={styles.screen}>
    <ImageBackground source={ require('../../images/bg.png') } style={styles.bg}>
      <View style={styles.main}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Logo width={205} height={205} style={styles.logo} />
          <Text style={styles.title}>Save the planet</Text>
          <Text style={styles.description}>Collect trash, scan them and receive rewards.</Text>
          <GreenButton label={'sign in'} />
      </View>
    </ImageBackground>
    </View>
  );
};

export default Home;
