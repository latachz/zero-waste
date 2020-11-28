import React from 'react';
import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Activity from './Activity';

interface Props {

}

const Activities = ({}: Props) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Activity title={'Plastic bottle'} points={10} time={'2 minutes ago'} />
      <Activity title={'Plastic bottle'} points={10} time={'2 minutes ago'} />
      <Activity title={'Plastic bottle'} points={10} time={'2 minutes ago'} />
      <Activity title={'Plastic bottle'} points={10} time={'2 minutes ago'} />
    </ScrollView>
  );
};

export default Activities;
