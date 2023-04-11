import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [lifetimePlants, setLifetimePlants] = useState(3);
  const [joinDate, setJoinDate] = useState("01/01/2022");
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.entireScreen}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.profilePicContainer}>
            <View style={styles.profilePicWrapper}>
              <Image source={{ uri: image }} style={styles.profilePic} />
              {image && <Image source={{ uri: image }} style={styles.profilePic} />}
            </View>
            <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
              <Image source={require('/Users/mihir.ar/Downloads/Client-Mobile-main 2/img/upload_img.png')} style={styles.cameraImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.username}>Grant</Text>
        </View>

        <View style={styles.stats}>
          {editMode ? (
            <>
              <View style={styles.stat}>
                <TextInput
                  style={styles.statNumber}
                  onChangeText={text => setLifetimePlants(text)}
                  value={lifetimePlants.toString()}
                />
              </View>
              <View style={styles.stat}>
                <TextInput
                  style={styles.statNumber}
                  onChangeText={text => setJoinDate(text)}
                  value={joinDate}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{lifetimePlants} Lifetime Plants</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>Joined: {joinDate}</Text>
              </View>
            </>
          )}
        </View>

        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setEditMode(!editMode)}>
            <Text style={styles.menuItem}>{editMode ? "Done" : "Edit"}</Text>
          </TouchableOpacity>
          <Text style={styles.menuItem}>Logout</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  entireScreen:{
    backgroundColor: "#fff7e9",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff7e9",
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    paddingTop: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicWrapper: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  profilePic: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#385250',
  },
  cameraIcon: {
    backgroundColor: "#fff7e9",
    borderWidth: 1,
    borderColor: '#385250',
    borderRadius: 80,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
  cameraImage: {
    width: 40,
    height: 40,
  },
  username: {
    fontFamily: 'Kabel-Black',
    fontSize: 45,
    color: '#385250',
    paddingTop: 20,
  },
  stat: {
    alignItems: 'center',
    paddingTop: 20,
  },
  statNumber: {
    fontFamily: 'Josefin Sans',
    fontSize: 24,
    color: '#385250',
  },
  statTitle: {
    fontFamily: 'Josefin Sans',
    fontSize: 16,
    color: '#385250',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  menuItem: {
    fontFamily: 'Kabel-Black',
    fontSize: 25,
    color: '#FFFFFF',
    backgroundColor: '#385250',
    borderRadius: 20,
    height: 60,
    width: 180,
    textAlign: 'center',
    borderWidth: 1,
    borderColor:  '#fff7e9',
    marginLeft: 7,
    overflow: 'hidden',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});
export default UserProfile;

const saveStatsToServer = async (lifetimePlants, joinDate) => {
  try {
    const response = await fetch('https://example.com/saveStats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lifetimePlants,
        joinDate,
      }),
    });
    const data = await response.json();
    console.log('Stats saved successfully:', data);
  } catch (error) {
    console.error('Error saving stats:', error);
  }
};

