import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white
  },
  head: {
    width: '100%',
    height: 210,
    justifyContent: 'space-between'
  },
  backButtonWrapper: {
    backgroundColor: colors.white,
    borderRadius: 5,
    width: 32,
    height: 32,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  time: {
    width: 130,
    height: 24,
    backgroundColor: colors.white,
    marginLeft: 15,
    marginBottom: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    fontSize: 12,
    fontFamily: fonts.poppins.semiBold,
    color: colors.black
  },
  body: {
    padding: 12,
    marginTop: -5,
    width: '100%'
  },
  progressBar: {
    width: '100%'
  },
  progressBarText: {
    fontSize: 10,
    fontFamily: fonts.poppins.semiBold,
    textAlign: 'left',
    color: colors.gray
  }

});
