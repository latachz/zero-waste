import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    textAlign: 'center',
    alignItems: 'center'
  },
  bg: {
    width: 420,
    height: 510,
    color: '#FAF8F5',
    top: -80
  },
  main: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.bold,
    fontSize: 32,
    textAlign: 'center',
    marginTop: 100
  },
  description: {
    color: colors.textPrimary,
    fontFamily: fonts.poppins.regular,
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 290,
    marginBottom: 30
  },
  logo: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 420
  }
});
