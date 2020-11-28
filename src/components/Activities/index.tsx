import React from 'react';
import {ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

import Activity from './Activity';

interface Props {
  activities: any[];
}

const Activities = ({activities}: Props) => {
  return (
    <ScrollView style={styles.wrapper}>
      {activities.map((activity, index) => (
        <Activity
          key={index}
          title={activity.name}
          points={activity.points}
          time={'2 minutes ago'}
        />
      ))}
    </ScrollView>
  );
};

export default Activities;
