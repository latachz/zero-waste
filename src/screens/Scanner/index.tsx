import React, {createRef, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';
import ml from '@react-native-firebase/ml';
import ScanPreview from '../../components/ScanPreview';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {saveScan} from '../../api/activities';

interface ScannedElement {
  name: string;
  category: string;
}

const Scanner = () => {
  const cameraRef = createRef();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [scannedElement, setScannedElement] = useState<ScannedElement | null>(
    null,
  );

  const currentUser = useSelector((store: any) => store.global.currentUser);

  const handleScan = async () => {
    //if (cameraRef.current) {
    // const options = {quality: 0.5, base64: true};
    // const data = await cameraRef.current.takePictureAsync(options);

    // const labels = await ml().cloudImageLabelerProcessImage(data.uri);
    // console.log(data.uri, labels);
    //}

    setScannedElement({
      name: 'Plastic bottle',
      category: 'plastic',
    });
  };

  const handleRejectScan = () => {
    setScannedElement(null);
  };
  const handleConfirmScan = async () => {
    await saveScan(scannedElement!.name, currentUser.id);
    setScannedElement(null);
  };

  return (
    <View style={{flex: 1}}>
      {isFocused ? (
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type="back"
          trackingEnabled
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {scannedElement && (
            <ScanPreview
              title={scannedElement.name}
              subtitle={scannedElement.category}
              onConfirm={handleConfirmScan}
              onReject={handleRejectScan}
            />
          )}
          <TouchableOpacity
            style={styles.scanButton}
            onPress={handleScan}></TouchableOpacity>
        </RNCamera>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Scanner;
