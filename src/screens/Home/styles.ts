import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.white,
    textAlign: 'center'
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.bold,
    fontSize: 32,
    textAlign: 'center'
  },
  description: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    textAlign: 'center'
  },
});
