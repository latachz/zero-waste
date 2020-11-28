import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightBackground,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconBackground: {
    width: 25,
    height: 25,
    backgroundColor: colors.green,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftContainer: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'column',
    marginLeft: 15
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.poppins.semiBold,
    color: colors.textPrimary
  },
  time: {
    fontSize: 10,
    fontFamily: fonts.poppins.medium,
    color: colors.gray,
    marginTop: -7
  },
  points: {
    color: colors.green,
    fontSize: 18,
    fontFamily: fonts.poppins.medium
  }
});
