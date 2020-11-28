import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  leftContainer: {
    width: '50%',
    textAlign: 'left',
    flexDirection: 'row',
    alignItems: 'center'
  },
  points: {
    marginLeft: 25,
    fontFamily: fonts.poppins.bold,
    color: colors.green,
    fontSize: 12
  },
  rightContainer: {
    textAlign: 'right',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
    borderColor: colors.green,
    borderWidth: 2,
    marginLeft: 20
  }
});
