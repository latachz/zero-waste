import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  navElement: {
    fontSize: 12,
    fontFamily: fonts.poppins.bold,
    color: colors.gray
  },
  navElementActive: {
    color: colors.green
  }
});
