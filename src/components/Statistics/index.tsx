import React from 'react';
import { View } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

import styles from './styles';


const Statistics = () => {
  const data = [
    {
      value: 50,
      label: 'M',
    },
    {
      value: 10,
      label: 'T',
    },
    {
      value: 40,
      label: 'W',
    },
    {
      value: 95,
      label: 'T',
    },
    {
      value: 85,
      label: 'F',
    },
    {
      value: 85,
      label: 'S',
    },
    {
      value: 85,
      label: 'S',
    },  
  ]

  return (
    <View style={styles.wrapper}>
      <View style={styles.box}>
        <BarChart
          style={{ flex: 1, marginLeft: 8, padding: 10 }}
          data={data}
          yAccessor={({ item }) => item.value}
          svg={{ fill: colors.green, stroke: 'none' }}
          gridMin={0}
          spacingInner={0.8}
          contentInset={{ top: 10, bottom: 10 }}
        >
          <Grid />
        </BarChart>
      <XAxis
        style={{ marginVertical: 10, marginHorizontal: 25 }}
        data={data}
        formatLabel={(_, index) => data[ index ].label}
        contentInset={{ left: 5, right: 5 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
      </View>
    </View>
  );
};

export default Statistics;
