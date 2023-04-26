import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Assuming you have a firebaseConfig file with your firebase setup

export default function UserProfile({ route }) {
  const { userId } = route.params;
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Error', 'Sorry, we need media library permissions to make this work!');
        }
      }
    })();
  }, []);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 600,
    });
  
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      const fileName = `profile_${new Date().getTime()}.jpg`; // Generate a unique file name using a timestamp
      const folderPath = `users/${userId}/profile/${fileName}`; // Append the file name to the folder path
      await uploadImage(folderPath);
    }
  };
  
  const uploadImage = async (path) => {
    if (!imageUri) return;
    const storage = getStorage();
    const imageRef = ref(storage, path); // Pass the full path including the file name
    const img = await fetch(imageUri);
    const bytes = await img.blob();
    await uploadBytes(imageRef, bytes)
      .then(() => {
        console.log("Profile picture uploaded successfully!");
        Alert.alert("Success", "Profile picture uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading profile picture: ", error);
        Alert.alert("Error", "Failed to upload profile picture.");
      });
  };
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('login');
    } catch (error) {
      console.error("Error signing out: ", error);
      Alert.alert("Error", "Failed to sign out.");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={selectImage}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 150, height: 150, borderRadius: 75 }}
            resizeMode="cover"
          />
        ) : (
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderColor: '#385250',
              borderWidth: 2,
              borderStyle: 'dashed',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#385250' }}>Upload</Text>
          </View>
        )}
      </TouchableOpacity>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}