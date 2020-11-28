import React, {createRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useIsFocused} from '@react-navigation/native';
import ml from '@react-native-firebase/ml';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {saveScanAction} from '../../actions/activities';

const Scanner = () => {
  const cameraRef = createRef();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const currentUser = useSelector((store: any) => store.global.currentUser);

  const handleScan = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);

      const labels = await ml().cloudImageLabelerProcessImage(data.uri);
      console.log(data.uri, labels);
    }
  };

  return (
    <View style={{flex: 1}}>
      {isFocused ? (
        <RNCamera
          ref={cameraRef}
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
          }}>
          <View style={styles.scanner} />
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
