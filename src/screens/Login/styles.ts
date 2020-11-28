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
    textAlign: 'center',
    marginBottom: 52,
  },
  backButtonWrapper: {
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 25,
    width: 50,
    height: 50,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 25,
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  googleButtonLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontFamily: fonts.poppins.medium,
  },
});
