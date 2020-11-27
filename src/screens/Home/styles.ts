import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import screen from '../../constants/screen';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    textAlign: 'center',
    alignItems: 'center',
  },
  bg: {
    height: screen.height * 0.6,
    width: screen.width,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.bold,
    fontSize: 32,
    textAlign: 'center',
    marginTop: 24,
  },
  description: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 290,
    marginBottom: 10,
  },
  logo: {},
});
