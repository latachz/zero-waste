import React, {createRef, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import ml from '@react-native-firebase/ml';
import ScanPreview from '../../components/ScanPreview';
import TrashSuggestion from '../../components/TrashSuggestion';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {saveScan} from '../../api/activities';
import ScannerIcon from '../../images/scanner.svg';
import ScannerIconWhite from '../../images/scanner-white.svg';
import TrashIcon from '../../images/trash-info.svg';
import TrashIconDark from '../../images/trash-info-dark.svg';
import Icon from 'react-native-vector-icons/Ionicons';

interface ScannedElement {
  name: string;
  category: string;
}

const Scanner = () => {
  const cameraRef = createRef();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [scannedElement, setScannedElement] = useState<ScannedElement | null>(
    null,
  );
  const [selectedOption, setSelectedoption] = useState<string>('scan');

  const currentUser = useSelector((store: any) => store.global.currentUser);

  const handleScan = async () => {
    //if (cameraRef.current) {
    // const options = {quality: 0.5, base64: true};
    // const data = await cameraRef.current.takePictureAsync(options);

    // const labels = await ml().cloudImageLabelerProcessImage(data.uri);
    // console.log(data.uri, labels);
    //}

    if (selectedOption === 'scan') {
      setScannedElement({
        name: 'Plastic bottle',
        category: 'plastic',
      });
    } else {
      setScannedElement({
        name: 'Plastic bottle',
        category: 'plastic',
      });
    }
  };

  const handleRejectScan = () => {
    setScannedElement(null);
  };

  const handleConfirmScan = async () => {
    await saveScan(scannedElement!.name, currentUser.id);
    setScannedElement(null);
    navigation.navigate('Main');
  };

  const handleSelectOption = (option) => {
    setSelectedoption(option);
  };

  return (
    <View style={{flex: 1}}>
      {isFocused ? (
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type="back"
          captureAudio={false}
          trackingEnabled
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerButton}>
              <Icon name="arrow-back" size={24} color="#263238" />
            </TouchableOpacity>
            <View style={{flex: 1}} />
            <TouchableOpacity
              disabled={selectedOption === 'scanner'}
              style={[
                styles.headerButton,
                selectedOption === 'info' && styles.buttonInactive,
              ]}
              onPress={() => handleSelectOption('scan')}>
              {selectedOption === 'scan' ? (
                <ScannerIcon width={24} height={24} />
              ) : (
                <ScannerIconWhite width={24} height={24} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSelectOption('info')}
              disabled={selectedOption === 'info'}
              style={[
                styles.headerButton,
                selectedOption === 'scan' && styles.buttonInactive,
                {marginLeft: 12},
              ]}>
              {selectedOption === 'info' ? (
                <TrashIconDark width={24} height={24} />
              ) : (
                <TrashIcon width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}} />
          {scannedElement && selectedOption === 'scan' && (
            <ScanPreview
              title={scannedElement.name}
              subtitle={scannedElement.category}
              onConfirm={handleConfirmScan}
              onReject={handleRejectScan}
            />
          )}
          {scannedElement && selectedOption === 'info' && (
            <TrashSuggestion
              title={scannedElement.name}
              subtitle="Recognized material"
              category={scannedElement.category}
              color="#F2E35B"
              onClose={handleRejectScan}
            />
          )}
          <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
            <ScannerIconWhite width={32} height={32} fill="#fff" />
          </TouchableOpacity>
        </RNCamera>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Scanner;
