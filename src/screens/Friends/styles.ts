import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import screen from '../../constants/screen';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    padding: 24,
    height: 50,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  arrowWrapper: {
    height: 24,
    width: 24,
    alignItems: 'center',
  }
});
