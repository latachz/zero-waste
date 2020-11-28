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
    marginTop: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: '83%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: colors.lightBackground,
    borderRadius: 15
  },
  input: {
    width: '95%',
    marginTop: 5,
    marginLeft: 10,
    color: colors.gray,
    fontSize: 16,
    fontFamily: fonts.poppins.medium
  }
});
