import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.bold,
    fontSize: 32,
  },
});
