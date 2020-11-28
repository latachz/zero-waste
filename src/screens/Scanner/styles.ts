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
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  camera: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
