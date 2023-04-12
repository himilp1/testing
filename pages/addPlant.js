import React, { useState } from 'react';
import { Image, Text, View, TextInput, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import styles from '../styles/addPlantStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../firebase';

const PLANT_ID_API_KEY = 'L4rTSXH7FplvKiyHzWsjWe5hWcfpvEK5JhMYCIeuKJscw5kGeS';

async function detectPlant(imageUri) {
  const base64Image = await FileSystem.readAsStringAsync(imageUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const body = JSON.stringify({
    organs: ['leaf', 'flower', 'fruit', 'bark', 'habit'],
    api_key: PLANT_ID_API_KEY,
    images: [base64Image],
    organelle: 'plant',
  });

  const response = await fetch('https://api.plant.id/v2/identify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const json = await response.json();
  return json;
}

export default function AddPlant() {
  const [imageUri, setImageUri] = useState(null);
  const [imageBlob, setImageBlob] = useState(null);
  const [plantName, setPlantName] = useState('');
  const [plantSpecies, setPlantSpecies] = useState('');
  const [plantDescription, setPlantDescription] = useState('');

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 600,
    });
    if (!result.cancelled) {
      setImageUri(result.uri);
      setImageBlob(result);

      const plantData = await detectPlant(result.uri);
      if (plantData && plantData.suggestions && plantData.suggestions.length > 0) {
        setPlantSpecies(plantData.suggestions[0].plant_name);
      } else {
        Alert.alert('Error', 'Plant not identified');
      }
    }
  };

  const uploadImage = async () => {
    if (!imageBlob) return;

    const response = await fetch(imageBlob.uri);
    const blob = await response.blob();
    const imageName = `images/${Math.random().toString(36).substring(7)}.jpg`;

    const storageRef = firebase.storage().ref().child(imageName);
    await storageRef.put(blob);
    const downloadUrl = await storageRef.getDownloadURL();
    console.log('before image upload');
    console.log('Image uploaded: ', downloadUrl);
  };

  const handleAddPlant = () => {
    uploadImage();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pageBox}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={selectImage} style={[styles.uploadArea, imageUri && { opacity: 0 }]}>
            <View style={styles.imageDottedBorder}>
              {imageUri && <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />}
              <Icon name='arrow-up' style={[imageUri && { display: 'none' }]} size={50} color="#385250"></Icon>
              <Text style={[styles.uploadText, imageUri && { display: 'none' }]}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.addPlantInfo}>
          <View style={styles.plantName}>
            <TextInput
              placeholder='Give your plant a name'
              placeholderTextColor="#385250"
              style={[styles.plantNameInput, { fontSize: 26, fontFamily: 'Kabel-Black' }]}
              onChangeText={setPlantName}
              value={plantName}
            >
            </TextInput>
          </View>
          <View style={styles.plantSpecies}>
            <TextInput
              placeholder="Plant Species"
              placeholderTextColor="#385250"
              style={[styles.plantSpeciesInput, { fontFamily: "JosefinSans", fontSize: 20, fontWeight: 'bold' }]}
              onChangeText={setPlantSpecies}
              value={plantSpecies}
            />
          </View>
          <View style={styles.plantDescription}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              textAlignVertical="top"
              placeholder="Add a description..."
              placeholderTextColor="#385250"
              style={[styles.plantDescriptionInput, { fontFamily: "JosefinSans", fontSize: 20, fontWeight: 'bold' }]}
              onChangeText={text => setPlantDescription(text)}
              value={plantDescription}
            />
          </View>
        </View>
        <View style={styles.confirmArea}>
          <TouchableOpacity onPress={handleAddPlant} style={styles.saveBtn}>
            <Text style={{ fontSize: 22, fontFamily: 'Kabel-Black', color: '#FFFFFF' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

