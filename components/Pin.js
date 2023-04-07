import React from 'react';
import { View, Image} from 'react-native';
import styles from '../styles/pinStyle';

function Pin({ pinSize, img}) {
  const pinStyles = [styles.pin, styles[pinSize]];
  return (
    <View style={pinStyles}>
      <Image source={img} style={styles.plantImage} />
    </View>
  );
}

export default Pin;
