import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

//@ts-ignore
import Logo from '../../images/recycle-white.svg';
import Close from '../../images/close.svg';
import Confirm from '../../images/confirm.svg';

interface Props {
  title: string;
  subtitle: string;
  onConfirm: () => void;
  onReject: () => void;
}

const ScanPreview = ({title, subtitle, onReject, onConfirm}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftContainer}>
        <View style={styles.iconBackground}>
          <Logo width={20} height={20} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onConfirm}>
          <Confirm />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onReject}>
          <Close />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanPreview;
