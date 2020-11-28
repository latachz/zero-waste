import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
  navWrapper: {

  },
  nav: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -40,
    padding: 52
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.lightBackground,
    marginTop: -15
  }
});
