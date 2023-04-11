import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/addPlant';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <View style={styles.pageBox}>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={selectImage} style={styles.uploadArea}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
            ) : (
              <Text style={styles.uploadText}>Upload</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.plantName}>
          <Text>Plant Name</Text>
        </View>
        <View style={styles.plantSpecies}>
          <Text>Plant Species</Text>
        </View>
        <View style={styles.plantDescription}>
          <Text>Plant Description</Text>
        </View>
      </View>
    </View>
  );
}
