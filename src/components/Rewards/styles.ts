import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  box: {
    height: 153,
    width: 120,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: colors.green,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleText: {
    color: colors.white,
    fontFamily: fonts.poppins.semiBold,
    fontSize: 24
  },
  info: {
    color: colors.gray,
    fontFamily: fonts.poppins.semiBold
  },
  button: {
    width: 80,
    height: 20,
    backgroundColor: colors.lightBackground,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonLabel: {
    fontSize: 8,
    fontFamily: fonts.poppins.semiBold,
    color: colors.lightGray
  },
  buttonActive: {
    backgroundColor: colors.green
  },
  buttonActiveLabel: {
    color: colors.white
  }
});
