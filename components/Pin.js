import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground} from 'react-native';
import styles from '../styles/pinStyle';

function Pin({ pinSize, img, link }) {
  const pinStyles = [styles.pin, styles[pinSize]];
  return (
    <View style={pinStyles}>
      <ImageBackground source={img} style={styles.mainPic}></ImageBackground>
    </View>
  );
}

export default Pin;