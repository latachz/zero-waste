import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontNames from '../../theme/fonts';

const styles = StyleSheet.create({
  input: {
    color: colors.textSecondary,
    fontSize: 16,
    fontFamily: fontNames.poppins.regular,
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#F2F3F7',
    marginBottom: 12,
  },
});

export default styles;
