import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';

import styles from './styles';

const Scanner = () => {
  const isFocused = useIsFocused();

  const handleScanBarcode = ({barcodes}: {barcodes: any[]}) => {
    if (barcodes.length) {
      console.log(barcodes[0]);
      return;
    }
  };

  return (
    <View style={{flex: 1}}>
      {isFocused ? (
        <RNCamera
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          type="back"
          trackingEnabled
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={handleScanBarcode}
          googleVisionBarcodeType={
            RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL
          }
          googleVisionBarcodeMode={
            RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode
              .ALTERNATE
          }>
          <View style={styles.scanner} />
        </RNCamera>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Scanner;
