import React from 'react';
import {View, Text, StatusBar, ImageBackground} from 'react-native';
//@ts-ignore
import Logo from '../../images/recycle.svg';
import Button from '../../components/Button';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ImageBackground
        source={require('../../images/bg.png')}
        imageStyle={styles.image}
        style={styles.bg}>
        <View style={styles.main}>
          <Logo width={205} height={205} style={styles.logo} />
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Save the planet</Text>
        <Text style={styles.description}>
          Collect trash, scan them and receive rewards.
        </Text>
        <Button label="sign in" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default Home;
