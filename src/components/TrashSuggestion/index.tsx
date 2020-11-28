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
  category: string;
  color: string;
  onClose: () => void;
}

const TrashSuggestion = ({
  title,
  subtitle,
  category,
  color,
  onClose,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
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
          <TouchableOpacity style={styles.actionButton} onPress={onClose}>
            <Close />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.materialBox, {backgroundColor: color}]}>
        <Text style={styles.materialName}>{category}</Text>
      </View>
    </View>
  );
};

export default TrashSuggestion;
