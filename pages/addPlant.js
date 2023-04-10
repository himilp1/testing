import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddPlant() {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 600,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };
  

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Select Image" onPress={selectImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
