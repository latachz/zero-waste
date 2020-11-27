import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    width: '100%',
    color: colors.white,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
});
