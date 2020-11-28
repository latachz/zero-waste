import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  scanner: {
    borderColor: colors.green,
    borderWidth: 4,
    width: 250,
    height: 250,
  },
  scanButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
});
