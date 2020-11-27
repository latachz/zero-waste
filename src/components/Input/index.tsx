import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import styles from './styles';
import colors from '../../theme/colors';

interface InputProps extends TextInputProps {
  style?: object;
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({
  style = {},
  placeholderTextColor = colors.textSecondary,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
};

export default Input;
