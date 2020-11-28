import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {saveScanAction} from '../../actions/activities';

const Scanner = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const currentUser = useSelector((store: any) => store.global.currentUser);

  const handleScanBarcode = ({barcodes}: {barcodes: any[]}) => {
    if (barcodes.length) {
      console.log(barcodes[0]);
      dispatch(saveScanAction('Plastic bottle', currentUser!.id));
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
