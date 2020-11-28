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
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: 'rgba(106, 204, 145, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
  },
  headerButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInactive: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
});
