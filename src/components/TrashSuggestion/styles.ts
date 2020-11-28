import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    backgroundColor: colors.lightBackground,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  iconBackground: {
    width: 25,
    height: 25,
    backgroundColor: colors.green,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.poppins.semiBold,
    color: colors.textPrimary,
  },
  time: {
    fontSize: 10,
    fontFamily: fonts.poppins.medium,
    color: colors.gray,
    marginTop: -7,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 32,
    height: 32,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  materialBox: {
    height: 100,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  materialName: {
    color: colors.textPrimary,
    textTransform: 'uppercase',
    fontFamily: fonts.poppins.bold,
    fontSize: 24,
  },
});
