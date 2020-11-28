import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  box: {
    margin: 5,
    width: '95%',
    height: 50,
    borderColor: colors.lightBackground,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
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
  },
  name: {
    fontFamily: fonts.poppins.semiBold,
    color: colors.textPrimary,
    fontSize: 16,
    marginLeft: 10
  },
  addButton: {
    backgroundColor: colors.green,
    width: 55,
    height: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  addButtonLabel: {
    color: colors.white,
    fontFamily: fonts.poppins.medium,
    fontSize: 12
  }
});
