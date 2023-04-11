import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/addPlantStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

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

  const handleAddPlant = () =>{
    console.log("in add plant");
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.pageBox}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={selectImage} style={[styles.uploadArea, imageUri && {opacity: 0}]}>
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />}
            <Icon name='arrow-up'style={[imageUri && {display: 'none'}]} size={50}></Icon>
            <Text style={[styles.uploadText, imageUri && {display: 'none'}]}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.plantName}>
          <Text style={{fontSize: 25, fontFamily: 'JosefinSans'}}>Plant Name</Text>
        </View>
        <View style={styles.plantSpecies}>
          <Text>Plant Species</Text>
        </View>
        <View style={styles.plantDescription}>
          <Text>Plant Description</Text>
        </View>
        <View style={styles.confirmButton}>
          <TouchableOpacity onPress={handleAddPlant}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
